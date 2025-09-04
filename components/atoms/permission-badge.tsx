import { Badge } from "@/components/ui/badge"

interface PermissionBadgeProps {
  permission: string
  variant?: "default" | "outline"
}

export function PermissionBadge({ permission, variant = "outline" }: PermissionBadgeProps) {
  return (
    <Badge variant={variant} className="text-xs">
      {permission}
    </Badge>
  )
}
