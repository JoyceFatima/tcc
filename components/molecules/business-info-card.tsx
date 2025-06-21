import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Store, Target } from "lucide-react"

interface BusinessInfoCardProps {
  businessData: {
    name: string
    type: string
    address: string
    targetAudience: string
  }
}

export function BusinessInfoCard({ businessData }: BusinessInfoCardProps) {
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
            <p className="font-medium">{businessData.name}</p>
            <p className="text-sm text-muted-foreground">{businessData.type}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <p className="text-sm">{businessData.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Target className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <p className="text-sm">
              <span className="font-medium">Público-alvo:</span> {businessData.targetAudience}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
