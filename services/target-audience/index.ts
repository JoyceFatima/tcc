import service from "@/configs/service.config"
import { ITargetAudience } from "./interface"

class TargetAudienceService {
  async getAll(): Promise<ITargetAudience[]> {
    const response = await service.get("/target-audience").then((res) => res.data)
    return response
  }
}

export const targetAudienceService = new TargetAudienceService()
