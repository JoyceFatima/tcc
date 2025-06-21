import { Header } from "@/components/organisms/header"
import { BusinessMetrics } from "@/components/organisms/business-metrics"
import { BusinessGoals } from "@/components/organisms/business-goals"

export function BusinessDataContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dados do Negócio</h1>
          <p className="text-muted-foreground">Gerencie as informações e configurações do seu negócio</p>
        </div>

        <BusinessMetrics />
        <BusinessGoals />
      </main>
    </div>
  )
}
