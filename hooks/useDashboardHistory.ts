
import { useState, useCallback } from "react";
import { dashboardService } from "@/services/dashboard";
import { IDashboard } from "@/services/dashboard/interface";
import { useBusiness } from "@/contexts/business";

export function useDashboardHistory() {
  const { business } = useBusiness();
  const [history, setHistory] = useState<IDashboard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback(async () => {
    if (!business?.id) return;

    setIsLoading(true);
    setError(null);

    try {
      const historyData = await dashboardService.getHistory(business.id);
      setHistory(historyData);
    } catch (error) {
      setError("Failed to fetch dashboard history.");
      console.error(error);
    }

    setIsLoading(false);
  }, [business?.id]);

  return { history, isLoading, error, fetchHistory };
}
