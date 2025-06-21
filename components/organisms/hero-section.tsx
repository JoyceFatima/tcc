import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, TrendingUp, Users, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          🚀 Análise Inteligente de Localização
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Descubra o <span className="text-primary">Local Perfeito</span>
          <br />
          para seu Negócio
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Use inteligência artificial para analisar localizações, entender seu público-alvo e tomar decisões
          estratégicas baseadas em dados reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <a href="/register">
              Começar Análise
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Análise de Localização</h3>
            <p className="text-sm text-muted-foreground">
              Avalie fluxo de pessoas, acessibilidade e visibilidade do seu ponto comercial
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Público-Alvo</h3>
            <p className="text-sm text-muted-foreground">
              Identifique se o perfil das pessoas na região combina com seu negócio
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Insights Estratégicos</h3>
            <p className="text-sm text-muted-foreground">
              Receba recomendações personalizadas para otimizar seu negócio
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
