/*
Este arquivo é um hook do React para o Next.js que gera dinamicamente os itens de um "breadcrumb"
(navegação hierárquica) com base na URL atual. Ele usa uma lista de rotas predefinidas
(`defaultItems`) para encontrar títulos amigáveis correspondentes aos segmentos da URL.

O hook `useBreadcrumbItems` obtém o caminho da URL usando `usePathname`, o divide em segmentos,
e itera sobre eles para construir a lista de breadcrumbs. Para cada segmento, ele tenta
encontrar uma correspondência na lista `defaultItems` ou em seus subitens. Se uma correspondência
for encontrada, o título definido é usado; caso contrário, o segmento da URL é capitalizado
para ser usado como rótulo do breadcrumb. O resultado é um array de objetos, onde cada um
contém o rótulo a ser exibido e a URL correspondente, criando a trilha de navegação.
*/

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
  //   {
  //     title: "Relatórios",
  //     url: "/reports",
  //     items: [
  //       { title: "Análise Detalhada", url: "/reports/detailed" },
  //       { title: "Comparativo Temporal", url: "/reports/temporal" },
  //       { title: "Concorrência", url: "/reports/competition" },
  //     ],
  //   },
  {
    title: "My Business",
    url: "/dashboard",
    items: [
      { title: "Metas do Negócio", url: "/business/data" },
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
