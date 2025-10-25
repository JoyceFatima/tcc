"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useBusinessMetrics } from "@/hooks/useBusinessMetrics"
import { TrendingUp, Users, DollarSign, Clock, AlertCircle, PlusCircle, Edit } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "../ui/button"
import { businessMetricsService } from "@/services/business-metrics"
import { useToast } from "@/hooks/use-toast"
import { useState, useMemo, useEffect } from "react"
import { useBusiness } from "@/contexts/business"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IBusinessMetric, ICreateBusinessMetricPayload, IUpdateBusinessMetricPayload } from "@/services/business-metrics/interface"

const iconMap = {
  Users,
  DollarSign,
  Clock,
  TrendingUp,
}

const initialFormState: Omit<ICreateBusinessMetricPayload, "businessId"> = {
  title: "",
  value: "",
  change: "",
  trend: "up",
}

export function BusinessMetrics() {
  const { business } = useBusiness()
  const businessId = business?.id || ""
  const { metrics, isLoading, error, mutate } = useBusinessMetrics(businessId)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMetric, setEditingMetric] = useState<IBusinessMetric | null>(null)
  const [formState, setFormState] = useState<Omit<ICreateBusinessMetricPayload, "businessId"> | IUpdateBusinessMetricPayload>(initialFormState)

  useEffect(() => {
    if (editingMetric) {
      setFormState({
        title: editingMetric.title,
        value: editingMetric.value,
        change: editingMetric.change,
        trend: editingMetric.trend,
      })
      setIsDialogOpen(true)
    } else {
      setFormState(initialFormState)
    }
  }, [editingMetric])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setEditingMetric(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!businessId) return

    setIsSubmitting(true)
    try {
      if (editingMetric) {
        await businessMetricsService.update(businessId, editingMetric.id, formState)
        toast({ title: "Métrica atualizada com sucesso!" })
      } else {
        await businessMetricsService.create({ ...(formState as ICreateBusinessMetricPayload), businessId })
        toast({ title: "Métrica adicionada com sucesso!" })
      }
      mutate()
      handleDialogClose()
    } catch (err) {
      console.error("Failed to save metric:", err)
      toast({ title: editingMetric ? "Erro ao atualizar métrica" : "Erro ao adicionar métrica", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const hasMetrics = useMemo(() => metrics && metrics.length > 0, [metrics])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Métricas do Negócio</CardTitle>
          <CardDescription>Indicadores de performance do seu negócio.</CardDescription>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(isOpen) => !isOpen && handleDialogClose()}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" disabled={!businessId} onClick={() => setIsDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Adicionar Métrica
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>{editingMetric ? "Editar Métrica" : "Adicionar Nova Métrica"}</DialogTitle>
                <DialogDescription>{editingMetric ? "Atualize os dados do indicador." : "Preencha os dados do novo indicador."}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">Título</Label>
                  <Input id="title" name="title" value={formState.title} onChange={handleInputChange} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="value" className="text-right">Valor</Label>
                  <Input id="value" name="value" value={formState.value} onChange={handleInputChange} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="change" className="text-right">Variação</Label>
                  <Input id="change" name="change" value={formState.change} onChange={handleInputChange} className="col-span-3" placeholder="+5% ou -10" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="trend" className="text-right">Tendência</Label>
                  <Select name="trend" value={formState.trend} onValueChange={(value) => setFormState(prev => ({ ...prev, trend: value as "up" | "down" }))}>
                    <SelectTrigger className="col-span-3"><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent><SelectItem value="up">Positiva (up)</SelectItem><SelectItem value="down">Negativa (down)</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter><Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Salvando..." : "Salvar"}</Button></DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">{/* Skeleton loader */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-lg" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </div>
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-destructive py-8">{/* Error state */}
            <AlertCircle className="mx-auto h-8 w-8 mb-2" />
            <p>Erro ao carregar as métricas.</p>
            <p className="text-sm text-muted-foreground">Tente novamente mais tarde.</p>
          </div>
        ) : hasMetrics ? (
          <div className="space-y-4">
            {metrics.map((metric) => {
              const firstWord = metric.title.split(" ")[0]
              const Icon = firstWord in iconMap ? iconMap[firstWord as keyof typeof iconMap] : TrendingUp

              return (
                <div key={metric.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{metric.title}</h4>
                      <p className="text-lg font-bold">{metric.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-gray-600"}`}>
                      {metric.change}
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setEditingMetric({ ...metric, businessId })}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8">{/* Empty state */}
            <p>Nenhuma métrica disponível para este negócio.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
