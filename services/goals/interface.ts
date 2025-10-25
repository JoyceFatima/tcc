import { IBusinessMetric } from '../business-metrics/interface'

export interface IGoal {
  id: string
  title: string
  target: number
  current: number
  isCompleted: boolean
  createdAt: string
  updatedAt: string
  metricId?: string
  metric?: IBusinessMetric
}

export type CreateGoalDto = Omit<IGoal, "id" | "current" | "createdAt" | "updatedAt" | "metric">

export type UpdateGoalDto = Partial<CreateGoalDto & { current: number }>
