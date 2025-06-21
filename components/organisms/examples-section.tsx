import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

export function ExamplesSection() {
  const examples = [
    {
      business: "Padaria Artesanal",
      location: "Centro - São Paulo",
      score: 85,
      insights: [
        { type: "positive", text: "Alto fluxo matinal de profissionais" },
        { type: "positive", text: "Boa acessibilidade por transporte público" },
        { type: "warning", text: "Concorrência moderada na região" },
      ],
    },
    {
      business: "Academia Fitness",
      location: "Bairro Residencial - Rio de Janeiro",
      score: 72,
      insights: [
        { type: "positive", text: "Público jovem e ativo na região" },
        { type: "warning", text: "Estacionamento limitado" },
        { type: "negative", text: "Baixo movimento noturno" },
      ],
    },
    {
      business: "Restaurante Gourmet",
      location: "Shopping Center - Belo Horizonte",
      score: 91,
      insights: [
        { type: "positive", text: "Excelente visibilidade e fluxo" },
        { type: "positive", text: "Público com poder aquisitivo alto" },
        { type: "positive", text: "Facilidade de estacionamento" },
      ],
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100"
    if (score >= 60) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "positive":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "negative":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <section id="examples" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemplos Reais</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como diferentes tipos de negócio se beneficiam da nossa análise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{example.business}</CardTitle>
                  <Badge className={getScoreColor(example.score)}>{example.score}%</Badge>
                </div>
                <CardDescription>{example.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {example.insights.map((insight, insightIndex) => (
                    <div key={insightIndex} className="flex items-start gap-2">
                      {getInsightIcon(insight.type)}
                      <span className="text-sm">{insight.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
