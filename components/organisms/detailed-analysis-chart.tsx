"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function DetailedAnalysisChart() {
  const analysisData = [
    { category: "Fluxo de Pessoas", current: 85, previous: 78, trend: "up" },
    { category: "Público-Alvo", current: 78, previous: 82, trend: "down" },
    { category: "Acessibilidade", current: 92, previous: 90, trend: "up" },
    { category: "Estacionamento", current: 45, previous: 45, trend: "stable" },
    { category: "Transporte Público", current: 88, previous: 85, trend: "up" },
    { category: "Segurança", current: 72, previous: 68, trend: "up" },
    { category: "Visibilidade", current: 80, previous: 75, trend: "up" },
    { category: "Concorrência", current: 65, previous: 70, trend: "down" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600 bg-green-100"
      case "down":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Análise Detalhada por Categoria</CardTitle>
        <CardDescription>Comparação com período anterior e tendências</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analysisData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium">{item.category}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl font-bold">{item.current}%</span>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(item.trend)}
                    <span className="text-sm text-muted-foreground">
                      {item.trend === "up" ? "+" : item.trend === "down" ? "-" : ""}
                      {Math.abs(item.current - item.previous)}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className={getTrendColor(item.trend)}>
                  {item.trend === "up" ? "Melhorou" : item.trend === "down" ? "Piorou" : "Estável"}
                </Badge>
                <div className="text-xs text-muted-foreground mt-1">vs. período anterior</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
