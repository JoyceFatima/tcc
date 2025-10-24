import { Badge } from "@/components/ui/badge"

interface RoleStatusBadgeProps {
  status: boolean
}

export function RoleStatusBadge({ status }: RoleStatusBadgeProps) {
  return <Badge variant={status ? "default" : "secondary"}>{status ? "Ativo" : "Inativo"}</Badge>
}
