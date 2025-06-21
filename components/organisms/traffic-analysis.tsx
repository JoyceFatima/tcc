"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TrafficAnalysis() {
  const hourlyData = [
    { hour: "06:00", pedestrians: 120, vehicles: 45 },
    { hour: "07:00", pedestrians: 280, vehicles: 85 },
    { hour: "08:00", pedestrians: 450, vehicles: 120 },
    { hour: "09:00", pedestrians: 380, vehicles: 95 },
    { hour: "10:00", pedestrians: 320, vehicles: 75 },
    { hour: "11:00", pedestrians: 290, vehicles: 65 },
    { hour: "12:00", pedestrians: 520, vehicles: 110 },
    { hour: "13:00", pedestrians: 480, vehicles: 105 },
    { hour: "14:00", pedestrians: 350, vehicles: 80 },
    { hour: "15:00", pedestrians: 310, vehicles: 70 },
    { hour: "16:00", pedestrians: 280, vehicles: 65 },
    { hour: "17:00", pedestrians: 420, vehicles: 95 },
    { hour: "18:00", pedestrians: 380, vehicles: 85 },
    { hour: "19:00", pedestrians: 250, vehicles: 55 },
  ]

  const maxPedestrians = Math.max(...hourlyData.map((d) => d.pedestrians))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise de Fluxo por Horário</CardTitle>
        <CardDescription>Movimento de pedestres e veículos ao longo do dia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hourlyData.map((data, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 text-sm font-medium">{data.hour}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-sm">👥 {data.pedestrians}</div>
                  <div className="text-sm text-muted-foreground">🚗 {data.vehicles}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(data.pedestrians / maxPedestrians) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
