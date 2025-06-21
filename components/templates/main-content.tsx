import { Header } from "@/components/organisms/header"
import { StatsCards } from "@/components/organisms/stats-cards"
import { LocationAnalysisChart } from "@/components/molecules/location-analysis-chart"
import { InsightsCard } from "@/components/molecules/insights-card"
import { BusinessInfoCard } from "@/components/molecules/business-info-card"

export function MainContent() {
  const businessData = {
    name: "Padaria do João",
    type: "Alimentação - Padaria",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    targetAudience: "Famílias e Profissionais",
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Análise completa da localização do seu negócio e insights para otimização
          </p>
        </div>

        <StatsCards />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <LocationAnalysisChart />
          <InsightsCard />
        </div>

        <BusinessInfoCard businessData={businessData} />
      </main>
    </div>
  )
}
