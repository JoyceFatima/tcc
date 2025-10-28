import { Store } from "lucide-react"

export function AppLogo() {
  return (
    <div className="flex items-center gap-2 py-1">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <Store className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">My Business</span>
        <span className="truncate text-xs text-muted-foreground">Análise de Localização</span>
      </div>
    </div>
  )
}
