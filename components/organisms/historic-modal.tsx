"use client";

import { IDashboard } from "@/services/dashboard/interface";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StatsCards } from "./stats-cards";
import { LocationAnalysisChart } from "../molecules/location-analysis-chart";
import { InsightsCard } from "../molecules/insights-card";
import { BusinessInfoCard } from "../molecules/business-info-card";

import { IBusiness } from "@/services/business/interface";

interface HistoryDetailsModalProps {
  dashboard: IDashboard;
  business: IBusiness | null;
  isOpen: boolean;
  onClose: () => void;
}

export function HistoryDetailsModal({ dashboard, business, isOpen, onClose }: HistoryDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Detalhes do Histórico</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <StatsCards stats={dashboard.stats} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <LocationAnalysisChart locationAnalysis={dashboard.locationAnalysis} />
            <InsightsCard insights={dashboard.insights} />
          </div>
          {business && <BusinessInfoCard businessData={business} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

interface HistoryModalProps {
  history: IDashboard[];
  onDashboardClick: (dashboard: IDashboard) => void;
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
}

export function HistoryModal({ history, onDashboardClick, isOpen, onClose, isLoading }: HistoryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Histórico de Análises</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ) : history.length === 0 ? (
            <p className="text-center text-gray-500">Nenhum histórico encontrado.</p>
          ) : (
            history.map((dashboard, index) => (
              <div key={index} className="border p-4 rounded-md cursor-pointer hover:bg-gray-100"
                   onClick={() => onDashboardClick(dashboard)}>
                <p>Análise {index + 1}</p>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}