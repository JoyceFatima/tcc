export interface IGoal {
  id: string
  title: string
  target: number
  current: number
  createdAt: string
  updatedAt: string
}

export type CreateGoalDto = Omit<IGoal, "id" | "current" | "createdAt" | "updatedAt">

export type UpdateGoalDto = Partial<CreateGoalDto & { current: number }>
