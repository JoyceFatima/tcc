"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useBusiness } from "@/contexts/business"
import { MapPin, Store, Target } from "lucide-react"

export function BusinessInfoCard() {
  const { business, businessTypes, targetAudiences, isLoading } = useBusiness()

  const businessTypeName = businessTypes.find((bt) => bt.id === business?.businessTypeId)?.name || "..."
  const targetAudienceName = targetAudiences.find((ta) => ta.id === business?.targetAudienceId)?.name || "..."

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Store className="h-5 w-5" />
          Informações do Negócio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <p>Carregando...</p>
        ) : business ? (
          <>
            <div className="flex items-start gap-3">
              <Store className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">{business.name}</p>
                <p className="text-sm text-muted-foreground">{businessTypeName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm">{business.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Target className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm">
                  <span className="font-medium">Público-alvo:</span> {targetAudienceName}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p>Dados do negócio não encontrados.</p>
        )}
      </CardContent>
    </Card>
  )
}
