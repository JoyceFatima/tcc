import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

export function TrendAnalysis() {
  const trends = [
    {
      title: "Fluxo de Pessoas",
      trend: "up",
      change: "+12%",
      description: "Crescimento consistente nos últimos 3 meses",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Compatibilidade do Público",
      trend: "stable",
      change: "+2%",
      description: "Mantém-se estável com leve melhora",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      title: "Concorrência",
      trend: "warning",
      change: "Novo",
      description: "Nova padaria abriu a 300m de distância",
      icon: AlertTriangle,
      color: "text-yellow-600",
    },
    {
      title: "Estacionamento",
      trend: "down",
      change: "-8%",
      description: "Redução de vagas devido a obras na rua",
      icon: TrendingDown,
      color: "text-red-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise de Tendências</CardTitle>
        <CardDescription>Principais mudanças identificadas no período</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trends.map((trend, index) => (
            <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
              <trend.icon className={`h-5 w-5 mt-0.5 ${trend.color}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{trend.title}</h4>
                  <span className={`text-sm font-medium ${trend.color}`}>{trend.change}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{trend.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
