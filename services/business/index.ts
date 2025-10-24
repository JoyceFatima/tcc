import service from "@/configs/service.config"
import { IBusiness } from "./interface"

class BusinessService {
  async getByOwnerId(ownerId: string): Promise<IBusiness> {
    const response = await service.get(`/business/${ownerId}`)
    return response.data
  }

  async update(id: string, data: Partial<IBusiness>): Promise<void> {
    await service.put(`/business/${id}`, data)
  }
}

export const businessService = new BusinessService()
