"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock } from "lucide-react"

export function CompetitorMap() {
  const competitors = [
    {
      name: "Padaria Central",
      distance: "150m",
      rating: 4.2,
      type: "Padaria",
      status: "Aberto",
      hours: "06:00 - 20:00",
      threat: "high",
    },
    {
      name: "Café da Esquina",
      distance: "280m",
      rating: 4.5,
      type: "Café",
      status: "Aberto",
      hours: "07:00 - 18:00",
      threat: "medium",
    },
    {
      name: "Panificadora São João",
      distance: "420m",
      rating: 3.8,
      type: "Padaria",
      status: "Fechado",
      hours: "05:30 - 19:00",
      threat: "low",
    },
    {
      name: "Doceria Doce Vida",
      distance: "380m",
      rating: 4.1,
      type: "Doceria",
      status: "Aberto",
      hours: "08:00 - 22:00",
      threat: "medium",
    },
  ]

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getThreatText = (threat: string) => {
    switch (threat) {
      case "high":
        return "Alto"
      case "medium":
        return "Médio"
      case "low":
        return "Baixo"
      default:
        return "Desconhecido"
    }
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Mapa de Concorrentes</CardTitle>
        <CardDescription>Concorrentes identificados num raio de 500m da sua localização</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {competitors.map((competitor, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">{competitor.name}</h4>
                    <p className="text-sm text-muted-foreground">{competitor.type}</p>
                  </div>
                </div>
                <Badge className={getThreatColor(competitor.threat)}>Ameaça: {getThreatText(competitor.threat)}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{competitor.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{competitor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={competitor.status === "Aberto" ? "text-green-600" : "text-red-600"}>
                      {competitor.status}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Horário: {competitor.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
