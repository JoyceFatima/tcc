import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ChartSection() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Gráfico de Vendas</CardTitle>
        <CardDescription>Visualize o desempenho de vendas do seu negócio ao longo do tempo</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full rounded-md bg-muted/50 flex items-center justify-center">
          <p className="text-muted-foreground">
            Gráfico de vendas ainda não implementado. Em breve você poderá visualizar o desempenho de vendas do seu
            negócio ao longo do tempo.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
