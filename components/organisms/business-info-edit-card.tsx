"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Store, MapPin, Edit } from "lucide-react"
import { toast } from "sonner"
import { useBusiness } from "@/contexts/business"
import { IBusiness, IAddress } from "@/services/business/interface"

export function BusinessInfoEditCard() {
  const {
    business,
    setBusiness,
    originalBusiness,
    businessTypes,
    targetAudiences,
    isLoading,
    isSaving,
    error,
    updateBusiness,
  } = useBusiness()
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (field: keyof IBusiness, value: string | number) => {
    if (!business) return
    setBusiness((prev) => (prev ? { ...prev, [field]: value } : null))
  }

  const handleAddressChange = (field: keyof IAddress, value: string) => {
    if (!business) return
    setBusiness((prev) => {
      if (!prev) return null

      const currentAddress =
        typeof prev.address === "string"
          ? { cep: "", street: "", number: "", neighborhood: "", city: "", state: "" }
          : prev.address

      return {
        ...prev,
        address: {
          ...currentAddress,
          [field]: value,
        },
      }
    })
  }

  const handleCepBlur = async (cep: string) => {
    if (cep.length !== 8) return

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) {
        toast.error("CEP não encontrado.")
        return
      }

      handleAddressChange("street", data.logradouro)
      handleAddressChange("neighborhood", data.bairro)
      handleAddressChange("city", data.localidade)
      handleAddressChange("state", data.uf)
    } catch (error) {
      toast.error("Erro ao buscar CEP.")
    }
  }

  const handleSave = async () => {
    if (!business) return

    try {
      await updateBusiness(business)
      setIsEditing(false)
    } catch (error) {
      // O toast de erro já é tratado no contexto
    }
  }

  const handleCancel = () => {
    setBusiness(originalBusiness)
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Metas do Negócio
          </span>
          <Button
            variant={isEditing ? "ghost" : "outline"}
            size="sm"
            onClick={isEditing ? handleCancel : () => setIsEditing(true)}
          >
            <Edit className="h-4 w-4" />
            {isEditing ? "Cancelar" : "Editar"}
          </Button>
        </CardTitle>
        <CardDescription>Informações sobre seu negócio e localização</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <p>Carregando informações do negócio...</p>
        ) : error || !business ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="business-name">Nome do Negócio</Label>
                <Input
                  id="business-name"
                  value={business.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="business-type">Tipo de Negócio</Label>
                <Select
                  value={business.businessTypeId || ""}
                  onValueChange={(value) => handleInputChange("businessTypeId", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes
                      .filter((type) => type.id)
                      .map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={business.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                disabled={!isEditing}
                rows={3}
              />
            </div>

            {business.address && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Endereço
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="CEP"
                    value={(business.address as any).cep}
                    onChange={(e) => handleAddressChange("cep", e.target.value)}
                    onBlur={(e) => handleCepBlur(e.target.value)}
                    disabled={!isEditing}
                    maxLength={8}
                  />
                  <Input
                    className="md:col-span-2"
                    placeholder="Rua"
                    value={(business.address as any).street}
                    onChange={(e) => handleAddressChange("street", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Número"
                    value={(business.address as any).number}
                    onChange={(e) => handleAddressChange("number", e.target.value)}
                    disabled={!isEditing}
                  />
                  <Input
                    className="md:col-span-2"
                    placeholder="Bairro"
                    value={(business.address as any).neighborhood}
                    onChange={(e) => handleAddressChange("neighborhood", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Cidade"
                    value={(business.address as any).city}
                    onChange={(e) => handleAddressChange("city", e.target.value)}
                    disabled={!isEditing}
                  />
                  <Input
                    placeholder="Estado"
                    value={(business.address as any).state}
                    onChange={(e) => handleAddressChange("state", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="target-audience">Público-Alvo</Label>
                <Select
                  value={business.targetAudienceId || ""}
                  onValueChange={(value) => handleInputChange("targetAudienceId", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {targetAudiences
                      .filter((audience) => audience.id)
                      .map((audience) => (
                        <SelectItem key={audience.id} value={audience.id}>
                          {audience.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Orçamento (R$)</Label>
                <Input
                  id="budget"
                  type="number"
                  min={0}
                  step={100}
                  placeholder="Ex: 5000"
                  value={business.budget || ""}
                  onChange={(e) => handleInputChange("budget", e.target.valueAsNumber || 0)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            {isEditing && (
              <Button className="w-full" onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Salvando..." : "Salvar Alterações"}
              </Button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
