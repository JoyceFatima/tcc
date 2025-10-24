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
import { IBusiness } from "@/services/business/interface"

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

  const handleSave = async () => {
    try {
      await updateBusiness()
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
            Dados do Negócio
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
            {" "}
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
                  value={business.businessTypeId}
                  onValueChange={(value) => handleInputChange("businessTypeId", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
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
            <div>
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Endereço
              </Label>
              <Input
                id="address"
                value={business.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="target-audience">Público-Alvo</Label>
                <Select
                  value={business.targetAudienceId}
                  onValueChange={(value) => handleInputChange("targetAudienceId", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {targetAudiences.map((audience) => (
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
                  value={business.budget || 0}
                  onChange={(e) => handleInputChange("budget", Number(e.target.value))}
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
