import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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

  const getScoreInfo = (score: number) => {
    if (score >= 80)
      return {
        text: "Excelente",
        description: "A localização possui um altíssimo potencial, com forte alinhamento aos fatores de sucesso.",
      }
    if (score >= 60)
      return {
        text: "Bom",
        description: "A localização é promissora, mas existem alguns pontos que podem ser otimizados.",
      }
    return {
      text: "Precisa Melhorar",
      description: "A localização apresenta desafios significativos que podem impactar o sucesso do negócio.",
    }
  }

  const scoreInfo = getScoreInfo(score)

  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{score}%</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className={`cursor-help text-xs text-white ${getScoreColor(score)}`}>
                {scoreInfo.text}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>{scoreInfo.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
