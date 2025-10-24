"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Car, Bus, Shield, Eye } from "lucide-react"
import { useBusiness } from "@/contexts/business"

export function LocationDetails() {
  const { business, isLoading, error } = useBusiness()

  const details = [
    {
      category: "Endereço",
      value: business?.address || "Não informado",
      subtitle: business?.name || "Negócio não carregado",
      icon: MapPin,
    },
    {
      category: "Horário de Movimento",
      value: "07:00 - 19:00",
      subtitle: "Pico: 08:00 e 12:00",
      icon: Clock,
    },
    {
      category: "Estacionamento",
      value: "45 vagas",
      subtitle: "Num raio de 200m",
      icon: Car,
    },
    {
      category: "Transporte Público",
      value: "8 pontos",
      subtitle: "Ônibus e metrô próximos",
      icon: Bus,
    },
    {
      category: "Segurança",
      value: "Boa",
      subtitle: "Área comercial movimentada",
      icon: Shield,
    },
    {
      category: "Visibilidade",
      value: "Alta",
      subtitle: "Rua principal com boa sinalização",
      icon: Eye,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalhes da Localização</CardTitle>
        <CardDescription>Informações específicas sobre sua localização</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p>Carregando detalhes da localização...</p>
        ) : error ? (
          <p className="text-destructive">{error}</p>
        ) : (
          <div className="space-y-4">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <detail.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{detail.category}</h4>
                  <p className="text-lg font-semibold">{detail.value}</p>
                  <p className="text-sm text-muted-foreground">{detail.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
