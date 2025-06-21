import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CompetitorAnalysis() {
  const analysis = [
    {
      category: "Preços",
      ourScore: 75,
      competitorAvg: 68,
      advantage: true,
    },
    {
      category: "Qualidade",
      ourScore: 82,
      competitorAvg: 78,
      advantage: true,
    },
    {
      category: "Atendimento",
      ourScore: 88,
      competitorAvg: 72,
      advantage: true,
    },
    {
      category: "Localização",
      ourScore: 76,
      competitorAvg: 81,
      advantage: false,
    },
    {
      category: "Variedade",
      ourScore: 70,
      competitorAvg: 75,
      advantage: false,
    },
    {
      category: "Horário",
      ourScore: 85,
      competitorAvg: 79,
      advantage: true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise Competitiva</CardTitle>
        <CardDescription>Comparação com a média dos concorrentes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {analysis.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{item.category}</span>
                <span className={`text-sm ${item.advantage ? "text-green-600" : "text-red-600"}`}>
                  {item.advantage ? "Vantagem" : "Desvantagem"}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Seu negócio</span>
                  <span className="font-medium">{item.ourScore}%</span>
                </div>
                <Progress value={item.ourScore} className="h-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Média dos concorrentes</span>
                  <span>{item.competitorAvg}%</span>
                </div>
                <Progress value={item.competitorAvg} className="h-1 opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
