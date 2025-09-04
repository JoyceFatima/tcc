"use client"

import { usePathname } from "next/navigation"

type MenuItem = {
  title: string
  url: string
  items?: MenuItem[]
}

const defaultItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Permissões",
    url: "/roles",
  },
  {
    title: "Relatórios",
    url: "/reports",
    items: [
      { title: "Análise Detalhada", url: "/reports/detailed" },
      { title: "Comparativo Temporal", url: "/reports/temporal" },
      { title: "Concorrência", url: "/reports/competition" },
    ],
  },
  {
    title: "Meu Negócio",
    url: "/business",
    items: [
      { title: "Dados do Negócio", url: "/business/data" },
      { title: "Localização", url: "/business/location" },
    ],
  },
  {
    title: "Minha Conta",
    url: "/account",
  },
]

export function useBreadcrumbItems() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  let url = ""
  let items: { label: string; href: string }[] = []

  for (let i = 0; i < segments.length; i++) {
    url += "/" + segments[i]
    let found: MenuItem | undefined

    found = defaultItems.find((item) => item.url === url)

    if (!found) {
      for (const parent of defaultItems) {
        if (parent.items) {
          found = parent.items.find((sub) => sub.url === url)
          if (found) break
        }
      }
    }

    if (found) {
      items.push({ label: found.title, href: found.url })
    } else {
      items.push({
        label: segments[i].charAt(0).toUpperCase() + segments[i].slice(1),
        href: url,
      })
    }
  }

  if (items.length === 0) {
    const dashboard = defaultItems.find((item) => item.url === "/dashboard")
    if (dashboard) {
      items.push({ label: dashboard.title, href: dashboard.url })
    }
  }

  return items
}
