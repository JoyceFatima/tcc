import { IDashboard } from '@/services/dashboard/interface';

export interface IDashboardContext {
  dashboard: IDashboard | null;
  isLoading: boolean;
  error: string | null;
  fetchDashboard: () => Promise<void>;
  generateDashboard: () => Promise<void>;
}
