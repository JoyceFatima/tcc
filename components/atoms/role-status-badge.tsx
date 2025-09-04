import { Badge } from "@/components/ui/badge"

interface RoleStatusBadgeProps {
  status: "active" | "inactive"
}

export function RoleStatusBadge({ status }: RoleStatusBadgeProps) {
  return (
    <Badge variant={status === "active" ? "default" : "secondary"}>{status === "active" ? "Ativo" : "Inativo"}</Badge>
  )
}
