import { Header } from "@/components/organisms/header"
import { LocationMap } from "@/components/organisms/location-map"
import { LocationDetails } from "@/components/organisms/location-details"
import { NearbyServices } from "@/components/organisms/nearby-services"

export function BusinessLocationContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Localização</h1>
          <p className="text-muted-foreground">Informações detalhadas sobre a localização do seu negócio</p>
        </div>

        <LocationMap />

        <LocationDetails />
        <NearbyServices />
      </main>
    </div>
  )
}
