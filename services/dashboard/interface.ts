export interface IDashboardStats {
  locationScore: number;
  locationScoreChange: number;
  dailyFootfall: number;
  targetAudienceCompatibility: number;
  competitors: number;
}

export interface IAnalysisItem {
  label: string;
  score: number;
}

export interface ILocationAnalysis {
  overallScore: number;
  analysisItems: IAnalysisItem[];
}

export interface IInsight {
  type: 'positive' | 'warning' | 'negative';
  title: string;
  description: string;
}

export interface IBusinessInfo {
  name: string;
  type: string;
  address: string;
  targetAudience: string;
}

export interface IDashboard {
  stats: IDashboardStats;
  locationAnalysis: ILocationAnalysis;
  insights: IInsight[];
  businessInfo: IBusinessInfo;
}
