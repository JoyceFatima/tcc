"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MarketShare() {
  const marketData = [
    { name: "Seu Negócio", share: 28, color: "bg-blue-500" },
    { name: "Padaria Central", share: 35, color: "bg-red-500" },
    { name: "Café da Esquina", share: 22, color: "bg-yellow-500" },
    { name: "Outros", share: 15, color: "bg-gray-400" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Participação de Mercado</CardTitle>
        <CardDescription>Estimativa baseada em fluxo de clientes e avaliações</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Gráfico de barras simples */}
          <div className="space-y-3">
            {marketData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.share}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.share}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className="pt-4 border-t space-y-2">
            <h4 className="font-medium">Insights:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Padaria Central lidera com 35% do mercado</li>
              <li>• Seu negócio tem 28% - posição competitiva forte</li>
              <li>• Oportunidade de crescer nos 15% "Outros"</li>
              <li>• Foco em diferenciação pode aumentar participação</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
