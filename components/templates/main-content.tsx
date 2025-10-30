"use client"
import { useDashboard } from "@/contexts/dashboard"
import { useExcelDownloader } from "@/hooks/useExcelDownloader"
import { useBusiness } from "@/contexts/business"
import { Header } from "@/components/organisms/header"
import { StatsCards } from "@/components/organisms/stats-cards"
import { LocationAnalysisChart } from "@/components/molecules/location-analysis-chart"
import { InsightsCard } from "@/components/molecules/insights-card"
import { BusinessInfoCard } from "@/components/molecules/business-info-card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"
import { Download } from "lucide-react"

function MainContentLoading() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-96" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Skeleton className="h-80 lg:col-span-5" />
          <Skeleton className="h-80 lg:col-span-2" />
        </div>
      </main>
    </div>
  )
}

export function MainContent() {
  const { dashboard, isLoading, generateDashboard } = useDashboard()
  const { business, businessTypes, targetAudiences } = useBusiness()
  const { isDownloading, download: downloadExcel } = useExcelDownloader({
    dashboardData: dashboard,
    businessData: business,
    fileName: "dashboard-relatorio.xlsx",
    // Passando as listas para o hook
    businessTypes,
    targetAudiences,
  })

  if (isLoading) {
    return <MainContentLoading />
  }

  const isButtonDisabled = isLoading || !business?.id

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="dashboard-content" className="flex-1 space-y-6 p-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Análise completa da localização do seu negócio e insights para otimização
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={downloadExcel} disabled={!dashboard || isDownloading} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? "Baixando..." : "Baixar Excel"}
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Button onClick={() => generateDashboard()} disabled={isButtonDisabled}>
                      {isLoading ? "Gerando..." : "Gerar Análise com IA"}
                    </Button>
                  </div>
                </TooltipTrigger>
                {isButtonDisabled && !isLoading && (
                  <TooltipContent>
                    <p>Você precisa ter um negócio cadastrado para gerar uma análise.</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {dashboard && (
          <>
            <StatsCards stats={dashboard.stats} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <LocationAnalysisChart locationAnalysis={dashboard.locationAnalysis} />
              <InsightsCard insights={dashboard.insights} />
            </div>
            <BusinessInfoCard businessData={business} />
          </>
        )}
      </main>
    </div>
  )
}
