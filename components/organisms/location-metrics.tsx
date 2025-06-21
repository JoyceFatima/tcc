import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Car, Bus, Shield, Eye, MapPin } from "lucide-react"

export function LocationMetrics() {
  const metrics = [
    {
      title: "Fluxo Diário",
      value: "2,847",
      subtitle: "pessoas/dia",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Vagas de Estacionamento",
      value: "45",
      subtitle: "num raio de 200m",
      icon: Car,
      color: "bg-green-500",
    },
    {
      title: "Pontos de Ônibus",
      value: "8",
      subtitle: "num raio de 500m",
      icon: Bus,
      color: "bg-purple-500",
    },
    {
      title: "Índice de Segurança",
      value: "7.2",
      subtitle: "de 10",
      icon: Shield,
      color: "bg-orange-500",
    },
    {
      title: "Visibilidade",
      value: "Alta",
      subtitle: "rua principal",
      icon: Eye,
      color: "bg-indigo-500",
    },
    {
      title: "Concorrentes",
      value: "3",
      subtitle: "num raio de 500m",
      icon: MapPin,
      color: "bg-red-500",
    },
  ]

  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <div className={`p-2 rounded-lg ${metric.color}`}>
              <metric.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
