import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"

export function BusinessMetrics() {
  const metrics = [
    {
      title: "Clientes Estimados/Dia",
      value: "180-220",
      change: "+12%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Receita Potencial/Mês",
      value: "R$ 45.000",
      change: "+8%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Horário de Pico",
      value: "07:00-09:00",
      change: "Estável",
      trend: "stable",
      icon: Clock,
    },
    {
      title: "Score de Performance",
      value: "76/100",
      change: "+4 pontos",
      trend: "up",
      icon: TrendingUp,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Métricas do Negócio</CardTitle>
        <CardDescription>Indicadores de performance baseados na localização</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <metric.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{metric.title}</h4>
                  <p className="text-lg font-bold">{metric.value}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-gray-600"}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
