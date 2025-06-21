import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Users } from "lucide-react"

export function ReportsOverview() {
  const reports = [
    {
      title: "Análise Detalhada",
      description: "Relatório completo com todas as métricas da localização",
      icon: BarChart3,
      href: "/reports/detailed",
      color: "bg-blue-500",
    },
    {
      title: "Comparativo Temporal",
      description: "Evolução dos dados ao longo do tempo",
      icon: TrendingUp,
      href: "/reports/temporal",
      color: "bg-green-500",
    },
    {
      title: "Análise de Concorrência",
      description: "Mapeamento e análise dos concorrentes",
      icon: Users,
      href: "/reports/competition",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reports.map((report, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className={`w-12 h-12 ${report.color} rounded-lg flex items-center justify-center mb-4`}>
              <report.icon className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">{report.title}</CardTitle>
            <CardDescription>{report.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={report.href}>Ver Relatório</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
