import { StatCard } from "@/components/atoms/stat-card"
import { TrendingUp, Users, Target, MapPin } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Score de Localização",
      value: "76%",
      description: "+5% desde o último mês",
      icon: TrendingUp,
    },
    {
      title: "Fluxo Diário",
      value: "2,847",
      description: "pessoas passam pelo local",
      icon: Users,
    },
    {
      title: "Compatibilidade",
      value: "78%",
      description: "do público é seu target",
      icon: Target,
    },
    {
      title: "Concorrentes",
      value: "3",
      description: "num raio de 500m",
      icon: MapPin,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
