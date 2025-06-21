import { Header } from "@/components/organisms/header"
import { DetailedAnalysisChart } from "@/components/organisms/detailed-analysis-chart"
import { LocationMetrics } from "@/components/organisms/location-metrics"
import { TrafficAnalysis } from "@/components/organisms/traffic-analysis"

export function DetailedReportContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Análise Detalhada</h1>
          <p className="text-muted-foreground">Relatório completo com métricas avançadas da sua localização</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LocationMetrics />
        </div>

        <DetailedAnalysisChart />
        <TrafficAnalysis />
      </main>
    </div>
  )
}
