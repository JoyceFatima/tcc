import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, ShoppingBag, Utensils, GraduationCap, Hospital, Car } from "lucide-react"

export function NearbyServices() {
  const services = [
    {
      category: "Escritórios",
      count: 12,
      distance: "200m",
      icon: Building,
      color: "bg-blue-100 text-blue-800",
    },
    {
      category: "Lojas",
      count: 8,
      distance: "150m",
      icon: ShoppingBag,
      color: "bg-green-100 text-green-800",
    },
    {
      category: "Restaurantes",
      count: 15,
      distance: "100m",
      icon: Utensils,
      color: "bg-orange-100 text-orange-800",
    },
    {
      category: "Escolas",
      count: 3,
      distance: "300m",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-800",
    },
    {
      category: "Clínicas",
      count: 5,
      distance: "250m",
      icon: Hospital,
      color: "bg-red-100 text-red-800",
    },
    {
      category: "Estacionamentos",
      count: 4,
      distance: "100m",
      icon: Car,
      color: "bg-gray-100 text-gray-800",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Serviços Próximos</CardTitle>
        <CardDescription>Estabelecimentos e serviços na região</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <service.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{service.category}</h4>
                  <p className="text-sm text-muted-foreground">Mais próximo: {service.distance}</p>
                </div>
              </div>
              <Badge className={service.color}>{service.count}</Badge>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">💡 Insight</h4>
          <p className="text-sm text-blue-800">
            A alta concentração de escritórios e escolas na região indica um público com renda estável e rotina
            definida, ideal para negócios de alimentação.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
