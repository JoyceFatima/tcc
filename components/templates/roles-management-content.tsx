"use client"

import type { ReactNode } from "react"
import { Header } from "../organisms/header"

interface RolesManagementContent {
  children: ReactNode
  onCreateRole?: () => void
}

export function RolesManagementContent({ children, onCreateRole }: RolesManagementContent) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Gerenciamento de Roles</h1>
              <p className="text-muted-foreground mt-2">Gerencie as funções e permissões dos usuários</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
