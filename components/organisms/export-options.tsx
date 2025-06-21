"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Download, FileText, ImageIcon, BarChart3, Calendar } from "lucide-react"

export function ExportOptions() {
  const exportFormats = [
    { value: "pdf", label: "PDF", icon: FileText },
    { value: "excel", label: "Excel", icon: BarChart3 },
    { value: "png", label: "PNG", icon: ImageIcon },
    { value: "csv", label: "CSV", icon: BarChart3 },
  ]

  const reportTypes = [
    { value: "complete", label: "Relatório Completo" },
    { value: "summary", label: "Resumo Executivo" },
    { value: "location", label: "Análise de Localização" },
    { value: "competition", label: "Análise de Concorrência" },
    { value: "temporal", label: "Comparativo Temporal" },
  ]

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Opções de Exportação
        </CardTitle>
        <CardDescription>Exporte seus relatórios e dados em diferentes formatos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Tipo de Relatório</Label>
              <Select defaultValue="complete">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Período</Label>
              <Select defaultValue="last-month">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-week">Última semana</SelectItem>
                  <SelectItem value="last-month">Último mês</SelectItem>
                  <SelectItem value="last-quarter">Último trimestre</SelectItem>
                  <SelectItem value="last-year">Último ano</SelectItem>
                  <SelectItem value="custom">Período personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Formatos Disponíveis</Label>
            <div className="grid grid-cols-2 gap-2">
              {exportFormats.map((format) => (
                <Button key={format.value} variant="outline" className="justify-start">
                  <format.icon className="h-4 w-4 mr-2" />
                  {format.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Exportações Automáticas</h4>
              <p className="text-sm text-muted-foreground">Configure exportações recorrentes</p>
            </div>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
