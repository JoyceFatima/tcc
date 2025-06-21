import { Badge } from "@/components/ui/badge"

interface LocationScoreProps {
  score: number
  label: string
}

export function LocationScore({ score, label }: LocationScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getScoreText = (score: number) => {
    if (score >= 80) return "Excelente"
    if (score >= 60) return "Bom"
    return "Precisa Melhorar"
  }

  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${getScoreColor(score)}`} />
          <span className="text-sm text-muted-foreground">{score}%</span>
        </div>
        <Badge variant="outline" className="text-xs">
          {getScoreText(score)}
        </Badge>
      </div>
    </div>
  )
}
