"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Zap } from "lucide-react"

export function LocationMap() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Mapa da Localização
        </CardTitle>
        <CardDescription>Visualização da sua localização e pontos de interesse próximos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Mapa Interativo</p>
              <p className="text-sm text-gray-400">Rua das Flores, 123 - Centro, São Paulo - SP</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <div>
                <h4 className="font-medium">Seu Negócio</h4>
                <p className="text-sm text-muted-foreground">Padaria do João</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div>
                <h4 className="font-medium">Concorrentes</h4>
                <p className="text-sm text-muted-foreground">3 no raio de 500m</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div>
                <h4 className="font-medium">Pontos de Ônibus</h4>
                <p className="text-sm text-muted-foreground">8 próximos</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
              <Navigation className="h-3 w-3 mr-1" />
              Ver Rotas
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
              <Zap className="h-3 w-3 mr-1" />
              Análise de Tráfego
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
