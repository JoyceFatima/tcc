"use client"

import { useEffect, useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Zap } from "lucide-react"
import { useBusiness } from "@/contexts/business"

export function LocationMap() {
  const { business, isLoading: isBusinessLoading } = useBusiness()
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
    if (business?.address) {
      const geocodeAddress = async () => {
        console.log("Geocoding address:", business.address);
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(business.address)}`
          )
          const data = await response.json()
          console.log("Geocoding response:", data);
          if (data && data.length > 0) {
            setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)])
            setMapError(null)
          } else {
            setMapError("Não foi possível encontrar o endereço no mapa. Tente ser mais específico, incluindo cidade, estado e CEP.")
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
          <div className="h-80 w-full rounded-lg border-2 border-dashed flex items-center justify-center bg-muted/40">
            {isBusinessLoading ? (
              <p>Carregando informações do negócio...</p>
            ) : mapError ? (
              <p className="text-destructive text-center">{mapError}</p>
            ) : position ? (
              <Map position={position} popupText={business?.name || "Sua localização"} />
            ) : (
              <p>Buscando localização no mapa...</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <div>
                <h4 className="font-medium">Seu Negócio</h4>
                <p className="text-sm text-muted-foreground">{business?.name || "..."}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div>
                <h4 className="font-medium">Concorrentes</h4>
                <p className="text-sm text-muted-foreground">3 no raio de 500m</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div>
                <h4 className="font-medium">Pontos de Ônibus</h4>
                <p className="text-sm text-muted-foreground">8 próximos</p>
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
