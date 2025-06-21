"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Plus, Target, Edit, Trash2 } from "lucide-react"

export function BusinessGoals() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Aumentar fluxo de clientes",
      target: 300,
      current: 220,
      unit: "clientes/dia",
    },
    {
      id: 2,
      title: "Melhorar score de localização",
      target: 85,
      current: 76,
      unit: "pontos",
    },
    {
      id: 3,
      title: "Reduzir concorrência",
      target: 2,
      current: 3,
      unit: "concorrentes próximos",
    },
  ])

  const [isAdding, setIsAdding] = useState(false)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Metas do Negócio
            </CardTitle>
            <CardDescription>Defina e acompanhe suas metas de crescimento</CardDescription>
          </div>
          <Button size="sm" onClick={() => setIsAdding(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Meta
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = Math.min((goal.current / goal.target) * 100, 100)
            const isReverse = goal.title.includes("Reduzir")

            return (
              <div key={goal.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{goal.title}</h4>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>
                      {goal.current} / {goal.target} {goal.unit}
                    </span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {isReverse
                      ? goal.current <= goal.target
                        ? "Meta atingida! 🎉"
                        : `Faltam ${goal.current - goal.target} ${goal.unit} para atingir a meta`
                      : goal.current >= goal.target
                        ? "Meta atingida! 🎉"
                        : `Faltam ${goal.target - goal.current} ${goal.unit} para atingir a meta`}
                  </p>
                </div>
              </div>
            )
          })}

          {isAdding && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-medium mb-3">Nova Meta</h4>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="goal-title">Título da Meta</Label>
                  <Input id="goal-title" placeholder="Ex: Aumentar vendas" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="goal-target">Meta</Label>
                    <Input id="goal-target" type="number" placeholder="100" />
                  </div>
                  <div>
                    <Label htmlFor="goal-unit">Unidade</Label>
                    <Input id="goal-unit" placeholder="clientes/dia" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Salvar</Button>
                  <Button size="sm" variant="outline" onClick={() => setIsAdding(false)}>
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
