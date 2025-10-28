import { UserPlus, MapPin, BarChart3 } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Cadastre seu Negócio",
      description: "Informe os dados do seu negócio e o endereço que deseja analisar",
    },
    {
      icon: MapPin,
      title: "2. Análise Automática",
      description: "Nossa IA analisa a localização considerando diversos fatores importantes",
    },
    {
      icon: BarChart3,
      title: "3. Receba Insights",
      description: "Visualize relatórios detalhados e recomendações personalizadas",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simples em 3 Passos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece a analisar seu negócio em poucos minutos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
