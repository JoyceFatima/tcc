"use client"

import { useEffect, useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Users, Zap } from "lucide-react"
import { useBusiness } from "@/contexts/business"
import { useDashboard } from "@/contexts/dashboard"
import { Skeleton } from "@/components/ui/skeleton"

export function LocationMap() {
  const { business, isLoading: isBusinessLoading } = useBusiness()
  const { dashboard, isLoading: isDashboardLoading } = useDashboard()
  const [position, setPosition] = useState<[number, number] | null>(null)
  const [mapError, setMapError] = useState<string | null>(null)

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/organisms/dynamic-map"), {
        loading: () => <p>Carregando mapa...</p>,
        ssr: false,
      }),
    []
  )

  useEffect(() => {
    const formatAddressToString = (address: any): string => {
      if (typeof address === "string") {
        return address
      }
      if (typeof address === "object" && address !== null) {
        return `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state}`
      }
      return ""
    }

    if (business?.address) {
      const geocodeAddress = async () => {
        const addressString = formatAddressToString(business.address)
        if (!addressString) return
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addressString)}`
          )
          const data = await response.json()
          console.log("Geocoding response:", data)
          if (data && data.length > 0) {
            setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)])
            setMapError(null)
          } else {
            setMapError(
              "Não foi possível encontrar o endereço no mapa. Tente ser mais específico, incluindo cidade, estado e CEP."
            )
          }
        } catch (error) {
          console.error("Geocoding error:", error)
          setMapError("Erro ao carregar o mapa. Verifique sua conexão.")
        }
      }
      geocodeAddress()
    }
  }, [business?.address])

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Mapa da Localização
        </CardTitle>
        <CardDescription>Visualização da sua localização e pontos de interesse próximos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-80 w-full rounded-lg border-2 border-dashed flex items-center justify-center bg-muted/40 overflow-hidden">
            {isBusinessLoading || !position ? (
              <p className="text-muted-foreground">Buscando localização no mapa...</p>
            ) : mapError ? (
              <p className="text-destructive text-center">{mapError}</p>
            ) : position ? (
              <Map position={position} popupText={business?.name || "Sua localização"} />
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <div>
                <h4 className="font-medium">Seu Negócio</h4>
                {isBusinessLoading ? (
                  <Skeleton className="h-4 w-24 mt-1" />
                ) : (
                  <p className="text-sm text-muted-foreground">{business?.name || "Não informado"}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div>
                <h4 className="font-medium">Concorrentes</h4>
                {isDashboardLoading ? (
                  <Skeleton className="h-4 w-32 mt-1" />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {dashboard?.stats.competitors ?? "..."} no raio de 500m
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div>
                <h4 className="font-medium">Fluxo e Público-Alvo</h4>
                {isDashboardLoading ? (
                  <Skeleton className="h-4 w-40 mt-1" />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    ~{dashboard?.stats.dailyFootfall ?? "..."} pessoas/dia,{" "}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
              <Navigation className="h-3 w-3 mr-1" />
              Ver Rotas
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
              <Zap className="h-3 w-3 mr-1" />
              Análise de Tráfego
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
