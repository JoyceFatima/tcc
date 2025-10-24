import { TableCell, TableRow } from "@/components/ui/table"
import { RoleStatusBadge } from "@/components/atoms/role-status-badge"
import type { IRole } from "@/services/roles/interface"

interface RoleTableRowProps {
  role: IRole
}

export function RoleTableRow({ role }: RoleTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{role.name}</TableCell>
      <TableCell className="max-w-[300px] truncate" title={role.description}>
        {role.description}
      </TableCell>
      <TableCell>
        <RoleStatusBadge status={role.isActive} />
      </TableCell>
      <TableCell>{new Date(role.createdAt).toLocaleDateString("pt-BR")}</TableCell>
    </TableRow>
  )
}
