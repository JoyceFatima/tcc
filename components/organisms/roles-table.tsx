"use client"

import { useEffect, useState } from "react"
import { AxiosError } from "axios"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RoleTableRow } from "@/components/molecules/role-table-row"
import { roleService } from "@/services/roles"
import type { IRole } from "@/services/roles/interface"

export function RolesTable() {
  const [roles, setRoles] = useState<IRole[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await roleService.getAll()
        setRoles(data)
      } catch (err) {
        console.error("Failed to fetch roles:", err)
        if (err instanceof AxiosError && err.response?.status === 403) {
          setError("Você não tem permissão para visualizar as roles.")
        } else {
          setError("Ocorreu um erro ao buscar as roles. Tente novamente mais tarde.")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchRoles()
  }, [])

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Criado em</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center p-4">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center p-4 text-destructive">
                  {error}
                </TableCell>
              </TableRow>
            ) : (
              roles.map((role) => <RoleTableRow key={role.id} role={role} />)
            )}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
