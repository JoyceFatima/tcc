import { StatCard } from "@/components/atoms/stat-card"
import { TrendingUp, Target, MapPin } from "lucide-react"

export function StatsCards({ stats }: any) {
  const statsData = [
    {
      title: "Score de Localização",
      value: `${stats.locationScore}%`,
      description: `${stats.locationScoreChange}% desde o último mês`,
      tooltipDescription:
        "Nota geral que avalia a qualidade da localização com base em fatores como fluxo de pessoas, acessibilidade e visibilidade.",
      icon: TrendingUp,
    },
    {
      title: "Compatibilidade",
      value: `${stats.targetAudienceCompatibility}%`,
      description: "do público é seu target",
      tooltipDescription:
        "Mede a porcentagem de pessoas que frequentam a região e que correspondem ao perfil do seu público-alvo.",
      icon: Target,
    },
    {
      title: "Concorrentes",
      value: stats.competitors,
      description: "num raio de 500m",
      tooltipDescription:
        "Número de negócios concorrentes diretos identificados em um raio de 500 metros da sua localização.",
      icon: MapPin,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
