"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TemporalChart() {
  const monthlyData = [
    { month: "Jan", score: 72, traffic: 2450, audience: 75 },
    { month: "Fev", score: 74, traffic: 2580, audience: 76 },
    { month: "Mar", score: 76, traffic: 2720, audience: 78 },
    { month: "Abr", score: 75, traffic: 2680, audience: 77 },
    { month: "Mai", score: 78, traffic: 2850, audience: 79 },
    { month: "Jun", score: 76, traffic: 2790, audience: 78 },
    { month: "Jul", score: 79, traffic: 2920, audience: 80 },
    { month: "Ago", score: 77, traffic: 2840, audience: 79 },
    { month: "Set", score: 80, traffic: 2980, audience: 81 },
    { month: "Out", score: 78, traffic: 2890, audience: 80 },
    { month: "Nov", score: 81, traffic: 3050, audience: 82 },
    { month: "Dez", score: 76, traffic: 2847, audience: 78 },
  ]

  const maxScore = Math.max(...monthlyData.map((d) => d.score))

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Evolução Temporal dos Indicadores</CardTitle>
            <CardDescription>Acompanhe a evolução dos principais indicadores ao longo do ano</CardDescription>
          </div>
          <Select defaultValue="2023">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Score Geral de Localização</h4>
            <div className="grid grid-cols-12 gap-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">{data.month}</div>
                  <div className="h-20 bg-gray-200 rounded relative">
                    <div
                      className="bg-blue-500 rounded absolute bottom-0 w-full"
                      style={{ height: `${(data.score / maxScore) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs font-medium mt-1">{data.score}%</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Fluxo de Pessoas (diário)</h4>
            <div className="grid grid-cols-12 gap-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">{data.month}</div>
                  <div className="h-16 bg-gray-200 rounded relative">
                    <div
                      className="bg-green-500 rounded absolute bottom-0 w-full"
                      style={{ height: `${(data.traffic / 3100) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs font-medium mt-1">{data.traffic}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Compatibilidade do Público-Alvo</h4>
            <div className="grid grid-cols-12 gap-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">{data.month}</div>
                  <div className="h-16 bg-gray-200 rounded relative">
                    <div
                      className="bg-purple-500 rounded absolute bottom-0 w-full"
                      style={{ height: `${data.audience}%` }}
                    />
                  </div>
                  <div className="text-xs font-medium mt-1">{data.audience}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
