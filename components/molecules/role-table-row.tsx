import { TableCell, TableRow } from "@/components/ui/table"
import { RoleStatusBadge } from "@/components/atoms/role-status-badge"
import { PermissionsList } from "@/components/molecules/permissions-list"
import { RoleActionsMenu } from "@/components/molecules/role-actions-menu"

type Role = {
  id: string
  name: string
  description: string
  permissions: string[]
  usersCount: number
  createdAt: string
  status: "active" | "inactive"
}

interface RoleTableRowProps {
  role: Role
  onEdit: (role: Role) => void
  onDelete: (role: Role) => void
}

export function RoleTableRow({ role, onEdit, onDelete }: RoleTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{role.name}</TableCell>
      <TableCell className="max-w-[200px] truncate">{role.description}</TableCell>
      <TableCell>
        <PermissionsList permissions={role.permissions} />
      </TableCell>
      <TableCell>{role.usersCount}</TableCell>
      <TableCell>
        <RoleStatusBadge status={role.status} />
      </TableCell>
      <TableCell>{new Date(role.createdAt).toLocaleDateString("pt-BR")}</TableCell>
      <TableCell>
        <RoleActionsMenu onEdit={() => onEdit(role)} onDelete={() => onDelete(role)} />
      </TableCell>
    </TableRow>
  )
}
