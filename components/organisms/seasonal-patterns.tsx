import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SeasonalPatterns() {
  const patterns = [
    {
      season: "Verão",
      period: "Dez - Mar",
      score: 82,
      characteristics: ["Maior fluxo de turistas", "Horário estendido", "Público jovem"],
      color: "bg-yellow-500",
    },
    {
      season: "Outono",
      period: "Mar - Jun",
      score: 78,
      characteristics: ["Fluxo estável", "Público familiar", "Movimento matinal"],
      color: "bg-orange-500",
    },
    {
      season: "Inverno",
      period: "Jun - Set",
      score: 74,
      characteristics: ["Menor movimento", "Público local", "Pico no almoço"],
      color: "bg-blue-500",
    },
    {
      season: "Primavera",
      period: "Set - Dez",
      score: 79,
      characteristics: ["Crescimento gradual", "Eventos locais", "Fim de semana ativo"],
      color: "bg-green-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Padrões Sazonais</CardTitle>
        <CardDescription>Como sua localização se comporta ao longo do ano</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patterns.map((pattern, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${pattern.color}`} />
                  <div>
                    <h4 className="font-medium">{pattern.season}</h4>
                    <p className="text-sm text-muted-foreground">{pattern.period}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{pattern.score}%</div>
                  <div className="text-xs text-muted-foreground">Score médio</div>
                </div>
              </div>
              <div className="space-y-1">
                {pattern.characteristics.map((char, charIndex) => (
                  <div key={charIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    {char}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
