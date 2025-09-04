"use client"

import { useState } from "react"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { EditRoleDialog } from "@/components/organisms/edit-role-dialog"
import { RoleTableRow } from "@/components/molecules/role-table-row"
import { useToast } from "@/hooks/use-toast"

const mockRoles = [
  {
    id: "1",
    name: "Administrador",
    description: "Acesso total ao sistema",
    permissions: ["read", "write", "delete", "admin"],
    usersCount: 3,
    createdAt: "2024-01-15",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Editor",
    description: "Pode criar e editar conteúdo",
    permissions: ["read", "write"],
    usersCount: 12,
    createdAt: "2024-01-20",
    status: "active" as const,
  },
  {
    id: "3",
    name: "Visualizador",
    description: "Apenas visualização de conteúdo",
    permissions: ["read"],
    usersCount: 25,
    createdAt: "2024-02-01",
    status: "active" as const,
  },
  {
    id: "4",
    name: "Moderador",
    description: "Pode moderar conteúdo e usuários",
    permissions: ["read", "write", "moderate"],
    usersCount: 5,
    createdAt: "2024-02-10",
    status: "inactive" as const,
  },
]

type Role = (typeof mockRoles)[0]

export function RolesTable() {
  const [roles, setRoles] = useState<Role[]>(mockRoles)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const { toast } = useToast()

  const handleEdit = (role: Role) => {
    setSelectedRole(role)
    setEditDialogOpen(true)
  }

  const handleDelete = (role: Role) => {
    setSelectedRole(role)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (selectedRole) {
      setRoles(roles.filter((role) => role.id !== selectedRole.id))
      toast({
        title: "Role excluída",
        description: `A role "${selectedRole.name}" foi excluída com sucesso.`,
      })
    }
    setDeleteDialogOpen(false)
    setSelectedRole(null)
  }

  const handleSaveRole = (updatedRole: Role) => {
    setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)))
    toast({
      title: "Role atualizada",
      description: `A role "${updatedRole.name}" foi atualizada com sucesso.`,
    })
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Permissões</TableHead>
              <TableHead>Usuários</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead className="w-[70px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <RoleTableRow key={role.id} role={role} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dialog de confirmação de exclusão */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a role "{selectedRole?.name}"? Esta ação não pode ser desfeita e afetará{" "}
              {selectedRole?.usersCount} usuários.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog de edição */}
      {selectedRole && (
        <EditRoleDialog
          role={selectedRole}
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          onSave={handleSaveRole}
        />
      )}
    </>
  )
}
