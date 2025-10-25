import service from "@/configs/service.config"
import { IBusinessMetric, ICreateBusinessMetricPayload, IUpdateBusinessMetricPayload } from "./interface"

class BusinessMetricsService {
  async getByBusinessId(businessId: string): Promise<IBusinessMetric[]> {
    const response = await service.get(`/business/${businessId}/metrics`)
    return response.data
  }
  
  async create(payload: ICreateBusinessMetricPayload): Promise<IBusinessMetric> {
    const response = await service.post(`/business/${payload.businessId}/metrics`, payload)
    return response.data
  }

  async update(businessId: string, metricId: string, payload: IUpdateBusinessMetricPayload): Promise<IBusinessMetric> {
    const response = await service.patch(`/business/${businessId}/metrics/${metricId}`, payload)
    return response.data
  }
}

export const businessMetricsService = new BusinessMetricsService()
