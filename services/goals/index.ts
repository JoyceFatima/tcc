import service from "@/configs/service.config"
import type { CreateGoalDto, IGoal, UpdateGoalDto } from "./interface"

class GoalService {
  async getAll(businessId: string, completed = false): Promise<IGoal[]> {
    const response = await service.get<IGoal[]>(`/business/${businessId}/goals`, {
      params: { completed },
    })
    return response.data
  }

  async create(businessId: string, data: CreateGoalDto): Promise<IGoal> {
    const response = await service.post<IGoal>(`/business/${businessId}/goals`, data)
    return response.data
  }

  async update(businessId: string, id: string, data: UpdateGoalDto): Promise<IGoal> {
    const response = await service.patch<IGoal>(`/business/${businessId}/goals/${id}`, data)
    return response.data
  }

  async complete(businessId: string, id: string): Promise<IGoal> {
    const response = await service.patch<IGoal>(`/business/${businessId}/goals/${id}/complete`)
    return response.data
  }

  async remove(businessId: string, id: string): Promise<void> {
    await service.delete(`/business/${businessId}/goals/${id}`)
  }
}

export const goalService = new GoalService()
