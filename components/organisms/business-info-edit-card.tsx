"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Store, MapPin, Edit } from "lucide-react"

export function BusinessInfoEditCard() {
  const [isEditing, setIsEditing] = useState(false)
  const [businessData, setBusinessData] = useState({
    name: "Padaria do João",
    type: "restaurant",
    description: "Padaria tradicional com pães frescos e produtos artesanais",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    targetAudience: "families",
    budget: "medium",
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Dados do Negócio
          </span>
          <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
            <Edit className="h-4 w-4" />
            {isEditing ? "Cancelar" : "Editar"}
          </Button>
        </CardTitle>
        <CardDescription>Informações sobre seu negócio e localização</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="business-name">Nome do Negócio</Label>
            <Input id="business-name" value={businessData.name} disabled={!isEditing} />
          </div>

          <div>
            <Label htmlFor="business-type">Tipo de Negócio</Label>
            <Select value={businessData.type} disabled={!isEditing}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="restaurant">Restaurante</SelectItem>
                <SelectItem value="retail">Varejo</SelectItem>
                <SelectItem value="service">Serviços</SelectItem>
                <SelectItem value="health">Saúde</SelectItem>
                <SelectItem value="beauty">Beleza</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea id="description" value={businessData.description} disabled={!isEditing} rows={3} />
        </div>

        <div>
          <Label htmlFor="address" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Endereço
          </Label>
          <Input id="address" value={businessData.address} disabled={!isEditing} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="target-audience">Público-Alvo</Label>
            <Select value={businessData.targetAudience} disabled={!isEditing}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="young-adults">Jovens Adultos</SelectItem>
                <SelectItem value="adults">Adultos</SelectItem>
                <SelectItem value="families">Famílias</SelectItem>
                <SelectItem value="professionals">Profissionais</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget">Faixa de Renda</Label>
            <Select value={businessData.budget} disabled={!isEditing}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Baixa</SelectItem>
                <SelectItem value="medium-low">Média-Baixa</SelectItem>
                <SelectItem value="medium">Média</SelectItem>
                <SelectItem value="medium-high">Média-Alta</SelectItem>
                <SelectItem value="high">Alta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isEditing && <Button className="w-full">Salvar Alterações</Button>}
      </CardContent>
    </Card>
  )
}
