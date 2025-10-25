'use client'
import { useDashboard } from "@/contexts/dashboard";
import { useBusiness } from "@/contexts/business";
import { Header } from "@/components/organisms/header"
import { StatsCards } from "@/components/organisms/stats-cards"
import { LocationAnalysisChart } from "@/components/molecules/location-analysis-chart"
import { InsightsCard } from "@/components/molecules/insights-card"
import { BusinessInfoCard } from "@/components/molecules/business-info-card"
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function MainContent() {
  const { dashboard, isLoading, generateDashboard } = useDashboard();
  const { business } = useBusiness();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const isButtonDisabled = isLoading || !business?.id;

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Análise completa da localização do seu negócio e insights para otimização
            </p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button onClick={() => generateDashboard()} disabled={isButtonDisabled}>
                    {isLoading ? 'Gerando...' : 'Gerar Análise com IA'}
                  </Button>
                </div>
              </TooltipTrigger>
              {isButtonDisabled && (
                <TooltipContent>
                  <p>Você precisa ter um negócio cadastrado para gerar uma análise.</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
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
