import { Header } from "@/components/organisms/header"
import { TemporalChart } from "@/components/organisms/temporal-chart"
import { TrendAnalysis } from "@/components/organisms/trend-analysis"
import { SeasonalPatterns } from "@/components/organisms/seasonal-patterns"

export function TemporalReportContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Comparativo Temporal</h1>
          <p className="text-muted-foreground">Análise da evolução dos dados ao longo do tempo</p>
        </div>

        <TemporalChart />

        <TrendAnalysis />
        <SeasonalPatterns />
      </main>
    </div>
  )
}
