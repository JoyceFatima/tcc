import service from "@/configs/service.config"
import type { CreateGoalDto, IGoal, UpdateGoalDto } from "./interface"

class GoalService {
  async getAll(): Promise<IGoal[]> {
    const response = await service.get<IGoal[]>("/goals")
    return response.data
  }

  async create(data: CreateGoalDto): Promise<IGoal> {
    const response = await service.post<IGoal>("/goals", data)
    return response.data
  }

  async update(id: string, data: UpdateGoalDto): Promise<IGoal> {
    const response = await service.patch<IGoal>(`/goals/${id}`, data)
    return response.data
  }

  async remove(id: string): Promise<void> {
    await service.delete(`/goals/${id}`)
  }
}

export const goalService = new GoalService()
