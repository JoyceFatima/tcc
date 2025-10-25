"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Store, Target } from "lucide-react"

export function BusinessInfoCard({ businessData }) {
  if (!businessData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Informações do Negócio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Dados do negócio não encontrados.</p>
        </CardContent>
      </Card>
    );
  }

  const { name, type, address, targetAudience } = businessData;

  const formattedAddress = typeof address === 'object' && address !== null
    ? `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.cep}`
    : address;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Store className="h-5 w-5" />
          Informações do Negócio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Store className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <p className="text-sm">{formattedAddress}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Target className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <p className="text-sm">
              <span className="font-medium">Público-alvo:</span> {targetAudience}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
