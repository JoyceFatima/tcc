import service from "@/configs/service.config";
import { IDashboard } from "./interface";

class DashboardService {
  async get(businessId: string): Promise<IDashboard> {
    const { data } = await service.get<IDashboard>(
      `/dashboard/${businessId}`
    );
    return data;
  }

  async generate(businessId: string): Promise<void> {
    await service.post(`/dashboard/generate/${businessId}`);
  }

  async getHistory(businessId: string): Promise<IDashboard[]> {
    const { data } = await service.get<IDashboard[]>(
      `/dashboard/history/${businessId}`
    );
    return data;
  }
}

export const dashboardService = new DashboardService();
