import { Header } from "@/components/organisms/header"
import { ReportsOverview } from "@/components/organisms/reports-overview"
import { QuickReports } from "@/components/organisms/quick-reports"
import { ReportFilters } from "@/components/organisms/report-filters"

export function ReportsContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground">Análises detalhadas e insights sobre a performance da sua localização</p>
        </div>

        <ReportFilters />
        <ReportsOverview />
        <QuickReports />
      </main>
    </div>
  )
}
