"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LocationScore } from "@/components/atoms/location-score"

export function LocationAnalysisChart({ locationAnalysis }) {
  const { overallScore, analysisItems } = locationAnalysis;

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Análise de Localização</CardTitle>
        <CardDescription>Avaliação completa do seu ponto comercial baseada em dados de mercado</CardDescription>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-2xl font-bold">{overallScore}%</span>
          <span className="text-muted-foreground">Score Geral</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {analysisItems.map((item, index) => (
            <LocationScore key={index} score={item.score} label={item.label} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
