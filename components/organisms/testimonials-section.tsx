import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Café da Esquina",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Consegui identificar o local perfeito para minha cafeteria. O fluxo de pessoas aumentou 40% comparado ao local anterior!",
    },
    {
      name: "João Santos",
      business: "Academia Fitness Pro",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "A análise de público-alvo foi certeira. Abri minha academia no local recomendado e já tenho lista de espera!",
    },
    {
      name: "Ana Costa",
      business: "Boutique Elegance",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Os insights sobre concorrência me ajudaram a me posicionar melhor no mercado. Recomendo para todos os empreendedores!",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Nossos Clientes Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de empreendedores que transformaram seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
