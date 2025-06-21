import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, MapPin, Users, Target, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard Completo",
      description: "Visualize todos os dados importantes em um painel intuitivo e fácil de usar",
    },
    {
      icon: MapPin,
      title: "Análise de Localização",
      description: "Avalie fluxo de pessoas, acessibilidade, estacionamento e transporte público",
    },
    {
      icon: Users,
      title: "Perfil do Público",
      description: "Entenda quem frequenta a região e se combina com seu público-alvo",
    },
    {
      icon: Target,
      title: "Análise de Concorrência",
      description: "Identifique concorrentes próximos e oportunidades de diferenciação",
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Suas informações protegidas com criptografia de ponta a ponta",
    },
    {
      icon: Zap,
      title: "Relatórios Instantâneos",
      description: "Gere relatórios detalhados em segundos para tomar decisões rápidas",
    },
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Poderosos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para analisar e otimizar a localização do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
