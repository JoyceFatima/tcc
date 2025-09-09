import service from "@/configs/service.config"
import { IBusinessType } from "./interface"

class BusinessTypeService {
  async getAll(): Promise<IBusinessType[]> {
    const response = await service.get("/business-type").then((res) => res.data)
    return response
  }
}

export const businessTypeService = new BusinessTypeService()
