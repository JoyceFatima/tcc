"use client"

import type * as React from "react"
import { Home, Users, BarChart3 } from "lucide-react"

import { NavMain } from "@/components/molecules/nav-main"
import { NavUser } from "@/components/molecules/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { AppLogo } from "@/components/atoms/app-logo"

const data = {
  user: {
    name: "João Silva",
    email: "joao@meunegocio.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
      items: [
        {
          title: "Análise de Local",
          url: "/analytics/location",
        },
        {
          title: "Público-Alvo",
          url: "/analytics/audience",
        },
        {
          title: "Concorrência",
          url: "/analytics/competition",
        },
      ],
    },
    {
      title: "Meu Negócio",
      url: "/business",
      icon: Users,
      items: [
        {
          title: "Dados do Negócio",
          url: "/business/data",
        },
        {
          title: "Localização",
          url: "/business/location",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
