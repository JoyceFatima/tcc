import { Header } from "@/components/organisms/header"
import { CompetitorMap } from "@/components/organisms/competitor-map"
import { CompetitorAnalysis } from "@/components/organisms/competitor-analysis"
import { MarketShare } from "@/components/organisms/market-share"

export function CompetitionReportContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Análise de Concorrência</h1>
          <p className="text-muted-foreground">Mapeamento e análise dos concorrentes na sua região</p>
        </div>

        <CompetitorMap />

        <div className="grid gap-6 md:grid-cols-2">
          <CompetitorAnalysis />
          <MarketShare />
        </div>
      </main>
    </div>
  )
}
