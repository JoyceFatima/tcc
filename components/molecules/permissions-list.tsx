import { PermissionBadge } from "@/components/atoms/permission-badge"

interface PermissionsListProps {
  permissions: string[]
  maxVisible?: number
}

export function PermissionsList({ permissions, maxVisible = 2 }: PermissionsListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {permissions.slice(0, maxVisible).map((permission) => (
        <PermissionBadge key={permission} permission={permission} />
      ))}
      {permissions.length > maxVisible && <PermissionBadge permission={`+${permissions.length - maxVisible}`} />}
    </div>
  )
}
