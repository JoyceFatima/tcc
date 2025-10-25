"use client"

import type React from "react"
import { AuthProvider } from "@/contexts"
import { DashboardProvider } from "@/contexts/dashboard"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DashboardProvider>{children}</DashboardProvider>
    </AuthProvider>
  )
}
