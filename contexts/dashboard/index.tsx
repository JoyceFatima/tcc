"use client"

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

import { useBusiness } from "@/contexts/business"
import { dashboardService } from "@/services/dashboard"
import { IDashboard } from "@/services/dashboard/interface"
import { IDashboardContext } from "./interface"

const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext)

const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const { business } = useBusiness()
  const [dashboard, setDashboard] = useState<IDashboard | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDashboard = async () => {
    if (!business?.id) {
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      const data = await dashboardService.get(business.id)
      setDashboard(data)
      setError(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ocorreu um erro desconhecido."
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const generateDashboard = async () => {
    if (!business?.id) return

    setIsLoading(true)
    try {
      await dashboardService.generate(business.id)
      await fetchDashboard() // Refetch after generating
      toast.success("Análise do dashboard gerada com sucesso!")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [business])

  const value = useMemo(
    () => ({
      dashboard,
      isLoading,
      error,
      fetchDashboard,
      generateDashboard,
    }),
    [dashboard, isLoading, error]
  )

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export { DashboardProvider }
export const useDashboard = () => useContext(DashboardContext)
