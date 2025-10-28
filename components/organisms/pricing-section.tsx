import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const features = [
    "Dashboard com mais detalhes",
    "Análise de Localização",
    "Perfil do Público",
    "Análise de Concorrência",
    "Mais de 100 Relatórios por Mês",
    "Suporte Prioritário",
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Um plano simples e direto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesso completo a todas as ferramentas para você tomar a melhor decisão.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-md w-full shadow-lg border-primary border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Plano Profissional</CardTitle>
              <CardDescription>Ideal para empreendedores e analistas.</CardDescription>
              <div className="text-4xl font-bold my-4">
                R$ 100<span className="text-lg font-normal text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full cursor-not-allowed" disabled={true}>
                <a href="/">EM BREVE</a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Estamos desenvolvendo esta funcionalidade. Fique ligado!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
