import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickReports() {
  const recentReports = [
    {
      title: "Relatório Semanal - Dezembro",
      date: "15 Dez 2023",
      type: "Automático",
      status: "Concluído",
    },
    {
      title: "Análise de Concorrência",
      date: "12 Dez 2023",
      type: "Manual",
      status: "Concluído",
    },
    {
      title: "Comparativo Mensal",
      date: "01 Dez 2023",
      type: "Automático",
      status: "Concluído",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Relatórios Recentes
        </CardTitle>
        <CardDescription>Seus relatórios gerados recentemente</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium">{report.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">{report.date}</span>
                  <Badge variant="outline" className="text-xs">
                    {report.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {report.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
