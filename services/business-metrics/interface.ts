export interface IBusinessMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: string;
  businessId: string;
}

export type ICreateBusinessMetricPayload = Omit<
  IBusinessMetric,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;

export type IUpdateBusinessMetricPayload = Partial<Omit<ICreateBusinessMetricPayload, 'businessId'>>;
