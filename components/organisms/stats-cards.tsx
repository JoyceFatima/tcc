import { StatCard } from "@/components/atoms/stat-card"
import { TrendingUp, Users, Target, MapPin } from "lucide-react"

export function StatsCards({ stats }) {
  const statsData = [
    {
      title: "Score de Localização",
      value: `${stats.locationScore}%`,
      description: `${stats.locationScoreChange}% desde o último mês`,
      icon: TrendingUp,
    },
    {
      title: "Fluxo Diário",
      value: stats.dailyFootfall,
      description: "pessoas passam pelo local",
      icon: Users,
    },
    {
      title: "Compatibilidade",
      value: `${stats.targetAudienceCompatibility}%`,
      description: "do público é seu target",
      icon: Target,
    },
    {
      title: "Concorrentes",
      value: stats.competitors,
      description: "num raio de 500m",
      icon: MapPin,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
