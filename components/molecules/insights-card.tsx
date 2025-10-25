import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

const iconMap = {
  positive: CheckCircle,
  warning: AlertTriangle,
  negative: TrendingDown,
  default: TrendingUp,
};

export function InsightsCard({ insights }) {
  const getIcon = (type: string) => {
    return iconMap[type] || iconMap.default;
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "positive":
        return "text-green-500"
      case "warning":
        return "text-yellow-500"
      case "negative":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Insights e Recomendações</CardTitle>
        <CardDescription>Análises baseadas nos dados da sua localização</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = getIcon(insight.type);
            return (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                <Icon className={`h-5 w-5 mt-0.5 ${getIconColor(insight.type)}`} />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
