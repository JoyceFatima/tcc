"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Database, Clock, BarChart3, Shield } from "lucide-react"

export function DataPreferences() {
  const [preferences, setPreferences] = useState({
    updateFrequency: "daily",
    dataRetention: "1year",
    anonymizeData: true,
    shareInsights: false,
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Preferências de Dados
        </CardTitle>
        <CardDescription>Configure como seus dados são coletados e processados</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="update-frequency" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Frequência de Atualização
            </Label>
            <Select
              value={preferences.updateFrequency}
              onValueChange={(value) => setPreferences((prev) => ({ ...prev, updateFrequency: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Tempo Real</SelectItem>
                <SelectItem value="hourly">A cada hora</SelectItem>
                <SelectItem value="daily">Diariamente</SelectItem>
                <SelectItem value="weekly">Semanalmente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="data-retention" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Retenção de Dados
            </Label>
            <Select
              value={preferences.dataRetention}
              onValueChange={(value) => setPreferences((prev) => ({ ...prev, dataRetention: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">3 meses</SelectItem>
                <SelectItem value="6months">6 meses</SelectItem>
                <SelectItem value="1year">1 ano</SelectItem>
                <SelectItem value="2years">2 anos</SelectItem>
                <SelectItem value="forever">Indefinidamente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Label htmlFor="anonymize-data" className="font-medium cursor-pointer">
                  Anonimizar Dados
                </Label>
                <p className="text-sm text-muted-foreground">
                  Remove informações pessoais dos relatórios compartilhados
                </p>
              </div>
            </div>
            <Switch
              id="anonymize-data"
              checked={preferences.anonymizeData}
              onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, anonymizeData: checked }))}
            />
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Label htmlFor="share-insights" className="font-medium cursor-pointer">
                  Compartilhar Insights
                </Label>
                <p className="text-sm text-muted-foreground">Contribua com dados anônimos para melhorar as análises</p>
              </div>
            </div>
            <Switch
              id="share-insights"
              checked={preferences.shareInsights}
              onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, shareInsights: checked }))}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
