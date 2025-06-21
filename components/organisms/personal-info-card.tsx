"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, Edit } from "lucide-react"

export function PersonalInfoCard() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao@meunegocio.com",
    phone: "(11) 99999-9999",
    avatar: "/placeholder.svg?height=80&width=80",
  })

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Informações Pessoais
          </span>
          <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
            <Edit className="h-4 w-4" />
            {isEditing ? "Cancelar" : "Editar"}
          </Button>
        </CardTitle>
        <CardDescription>Suas informações pessoais e de contato</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          {isEditing && (
            <Button variant="outline" size="sm">
              Alterar Foto
            </Button>
          )}
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              disabled={!isEditing}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="email"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                disabled={!isEditing}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="phone"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                disabled={!isEditing}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <Button onClick={handleSave} className="w-full">
            Salvar Alterações
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
