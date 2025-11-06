"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { User, Store, MapPin, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react"

import { useAuth } from "@/contexts"
import { IRegister } from "@/services/auth/interface"
import { IBusinessType } from "@/services/business-type/interface"
import { ITargetAudience } from "@/services/target-audience/interface"
import { targetAudienceService } from "@/services/target-audience"
import { businessTypeService } from "@/services/business-type"
import { IAddress } from "@/services/business/interface"

export function RegisterForm() {
  const { register } = useAuth()
  const { push } = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isFetchingCep, setIsFetchingCep] = useState(false)

  const [businessTypes, setBusinessTypes] = useState<IBusinessType[]>([])
  const [targetAudiences, setTargetAudiences] = useState<ITargetAudience[]>([])

  const [formData, setFormData] = useState<IRegister>({
    user: {
      email: "",
      name: "",
      lastName: "",
      document: "",
      phone: "",
      password: "",
    },
    business: {
      name: "",
      description: "",
      address: {
        cep: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
      },
      budget: 0,
      businessTypeId: "",
      targetAudienceId: "",
    },
  })
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleInputChange = (
    section: "user" | "business",
    field: keyof IRegister["user"] | keyof IRegister["business"],
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleAddressChange = (field: keyof IAddress, value: string) => {
    setFormData((prev) => {
      if (!prev.business) return prev

      const currentAddress =
        typeof prev.business.address === "string"
          ? { cep: "", street: "", number: "", neighborhood: "", city: "", state: "" }
          : (prev.business.address as IAddress)

      return {
        ...prev,
        business: {
          ...prev.business,
          address: {
            ...currentAddress,
            [field]: value,
          },
        },
      }
    })
  }

  const handleCepBlur = async (cep: string) => {
    if (cep.length !== 8) return

    setIsFetchingCep(true)
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
    } finally {
      setIsFetchingCep(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.user.password !== confirmPassword) {
      setError("As senhas não coincidem. Por favor, verifique.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const address = formData.business.address as IAddress
      const formattedAddress = `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.cep}`
      
      await register({
        ...formData,
        business: {
          ...formData.business,
          address: formattedAddress
        }
      })
      push("/dashboard")
    } catch (err) {
      console.error("Erro no registro:", err)
      setError("Ocorreu um erro ao criar a conta. Tente novamente mais tarde.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getSelectsOptions = async () => {
      try {
        const [targetAudienceResult, businessTypeResult] = await Promise.all([
          targetAudienceService.getAll(),
          businessTypeService.getAll(),
        ])
        setTargetAudiences(targetAudienceResult)
        setBusinessTypes(businessTypeResult)
      } catch (err) {
        console.error("Falha ao buscar opções de select:", err)
        setError("Não foi possível carregar os dados do formulário.")
      }
    }

    getSelectsOptions()
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Criar Conta</CardTitle>
        <CardDescription className="text-center">
          Preencha seus dados pessoais e as informações do seu negócio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Dados Pessoais</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  placeholder="Seu nome"
                  value={formData.user.name}
                  onChange={(e) => handleInputChange("user", "name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  id="lastName"
                  placeholder="Seu sobrenome"
                  value={formData.user.lastName}
                  onChange={(e) => handleInputChange("user", "lastName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="document">CPF</Label>
                <Input
                  id="document"
                  placeholder="Seu CPF"
                  value={formData.user.document}
                  onChange={(e) => handleInputChange("user", "document", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    value={formData.user.phone}
                    onChange={(e) => handleInputChange("user", "phone", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.user.password}
                    onChange={(e) => handleInputChange("user", "password", e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.user.email}
                    onChange={(e) => handleInputChange("user", "email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Dados do Negócio</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Nome do Negócio</Label>
                  <Input
                    id="businessName"
                    placeholder="Ex: Padaria do João"
                    value={formData.business.name}
                    onChange={(e) => handleInputChange("business", "name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Tipo de Negócio</Label>
                  {businessTypes.length > 0 && (
                    <Select
                      required
                      value={formData.business.businessTypeId}
                      onValueChange={(value) => handleInputChange("business", "businessTypeId", value)}
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
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição do Negócio</Label>
                <Textarea
                  id="description"
                  value={formData.business.description}
                  onChange={(e) => handleInputChange("business", "description", e.target.value)}
                  placeholder="Descreva brevemente seu negócio e o que oferece..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Endereço
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="CEP"
                    value={((formData.business.address as IAddress) || {}).cep || ""}
                    onChange={(e) => handleAddressChange("cep", e.target.value)}
                    onBlur={(e) => handleCepBlur(e.target.value)}
                    disabled={isFetchingCep}
                    maxLength={8}
                  />
                  <Input
                    className="md:col-span-2"
                    placeholder="Rua"
                    value={((formData.business.address as IAddress) || {}).street || ""}
                    onChange={(e) => handleAddressChange("street", e.target.value)}
                    disabled={isFetchingCep}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Número"
                    value={((formData.business.address as IAddress) || {}).number || ""}
                    onChange={(e) => handleAddressChange("number", e.target.value)}
                    disabled={isFetchingCep}
                  />
                  <Input
                    className="md:col-span-2"
                    placeholder="Bairro"
                    value={((formData.business.address as IAddress) || {}).neighborhood || ""}
                    onChange={(e) => handleAddressChange("neighborhood", e.target.value)}
                    disabled={isFetchingCep}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Cidade"
                    value={((formData.business.address as IAddress) || {}).city || ""}
                    onChange={(e) => handleAddressChange("city", e.target.value)}
                    disabled={isFetchingCep}
                  />
                  <Input
                    placeholder="Estado"
                    value={((formData.business.address as IAddress) || {}).state || ""}
                    onChange={(e) => handleAddressChange("state", e.target.value)}
                    disabled={isFetchingCep}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Público-Alvo Principal</Label>
                  {targetAudiences.length > 0 && (
                    <Select
                      required
                      value={formData.business.targetAudienceId}
                      onValueChange={(value) => handleInputChange("business", "targetAudienceId", value)}
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
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Orçamento (R$)</Label>
                  <Input
                    id="budget"
                    type="number"
                    min={0}
                    step={100}
                    placeholder="Ex: 5000"
                    value={formData.business.budget || ""}
                    onChange={(e) => handleInputChange("business", "budget", e.target.valueAsNumber || 0)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? "Criando conta..." : "Começar Análise"}
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta?
              <Link href="/login" className="text-primary hover:underline font-medium">
                Fazer login
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
