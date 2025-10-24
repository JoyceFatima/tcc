"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Plus, Target, Edit, Trash2 } from "lucide-react"
import { goalService } from "@/services/goals"
import type { CreateGoalDto, IGoal } from "@/services/goals/interface"
import { useToast } from "@/hooks/use-toast"

export function BusinessGoals() {
  const [goals, setGoals] = useState<IGoal[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [editingGoal, setEditingGoal] = useState<IGoal | null>(null)
  const [newGoal, setNewGoal] = useState<CreateGoalDto>({ title: "", target: 0 })
  const { toast } = useToast()

  useEffect(() => {
    fetchGoals()
  }, [])

  const fetchGoals = async () => {
    try {
      setIsLoading(true)
      const data = await goalService.getAll()
      setGoals(data)
    } catch (error) {
      console.error("Failed to fetch goals:", error)
      toast({
        title: "Erro ao buscar metas",
        description: "Não foi possível carregar as metas. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddGoal = async () => {
    if (!newGoal.title || !newGoal.target) {
      toast({ title: "Preencha todos os campos da nova meta.", variant: "destructive" })
      return
    }
    try {
      const createdGoal = await goalService.create(newGoal)
      setGoals([...goals, createdGoal])
      setIsAdding(false)
      setNewGoal({ title: "", target: 0 })
      toast({ title: "Meta adicionada com sucesso!" })
    } catch (error) {
      toast({ title: "Erro ao adicionar meta.", variant: "destructive" })
    }
  }

  const handleUpdateGoal = async () => {
    if (!editingGoal) return

    try {
      const updatedGoal = await goalService.update(editingGoal.id, {
        title: editingGoal.title,
        target: editingGoal.target,
        current: editingGoal.current,
      })
      setGoals(goals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)))
      setEditingGoal(null)
      toast({ title: "Meta atualizada com sucesso!" })
    } catch (error) {
      console.error("Failed to update goal:", error)
      toast({ title: "Erro ao atualizar meta.", variant: "destructive" })
    }
  }

  const handleDeleteGoal = async (id: string) => {
    try {
      await goalService.remove(id)
      setGoals(goals.filter((g) => g.id !== id))
      toast({ title: "Meta removida com sucesso." })
    } catch (error) {
      toast({ title: "Erro ao remover meta.", variant: "destructive" })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewGoal((prev) => ({
      ...prev,
      [name]: name === "target" ? parseFloat(value) || 0 : value,
    }))
  }

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingGoal) return
    const { name, value } = e.target
    const numericValue = ["target", "current"].includes(name) ? parseFloat(value) || 0 : value
    setEditingGoal({
      ...editingGoal,
      [name]: numericValue,
    })
  }

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
          {!isAdding && (
            <Button size="sm" onClick={() => setIsAdding(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Nova Meta
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading && <p>Carregando metas...</p>}

          {!isLoading && goals.length === 0 && !isAdding && (
            <div className="text-center text-muted-foreground py-8">
              <p>Nenhuma meta definida ainda.</p>
              <p>Clique em "Nova Meta" para começar.</p>
            </div>
          )}

          {goals.map((goal) => {
            const progress = Math.min((goal.current / goal.target) * 100, 100)
            const isReverse = goal.title.includes("Reduzir")

            return editingGoal?.id === goal.id ? (
              // Formulário de Edição
              <div key={goal.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="space-y-3">
                  <div>
                    <Label htmlFor={`edit-title-${goal.id}`}>Título da Meta</Label>
                    <Input
                      id={`edit-title-${goal.id}`}
                      name="title"
                      value={editingGoal.title}
                      onChange={handleEditInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Label htmlFor={`edit-current-${goal.id}`}>Atual</Label>
                      <Input
                        id={`edit-current-${goal.id}`}
                        name="current"
                        type="number"
                        value={editingGoal.current}
                        onChange={handleEditInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`edit-target-${goal.id}`}>Meta</Label>
                      <Input
                        id={`edit-target-${goal.id}`}
                        name="target"
                        type="number"
                        value={editingGoal.target}
                        onChange={handleEditInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleUpdateGoal}>
                      Salvar
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingGoal(null)}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // Visualização da Meta
              <div key={goal.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{goal.title}</h4>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setEditingGoal(goal)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteGoal(goal.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>
                      {goal.current} / {goal.target}
                    </span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {isReverse
                      ? goal.current <= goal.target
                        ? "Meta atingida! 🎉"
                        : `Faltam ${goal.current - goal.target} para atingir a meta`
                      : goal.current >= goal.target
                      ? "Meta atingida! 🎉"
                      : `Faltam ${goal.target - goal.current} para atingir a meta`}
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
                  <Input
                    id="goal-title"
                    name="title"
                    placeholder="Ex: Aumentar vendas"
                    value={newGoal.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <Label htmlFor="goal-target">Meta</Label>
                    <Input
                      id="goal-target"
                      name="target"
                      type="number"
                      placeholder="100"
                      value={newGoal.target}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleAddGoal}>
                    Salvar
                  </Button>
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
