"use client"

import { Home, Users, BarChart3 } from "lucide-react"

import { NavMain } from "@/components/molecules/nav-main"
import { NavUser } from "@/components/molecules/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { AppLogo } from "@/components/atoms/app-logo"
import { useEffect, useState } from "react"
import { useAuth } from "@/contexts"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth()

  const [data, setData] = useState({
    user: {
      name: user?.name || "",
      email: user?.email || "",
      avatar: "",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Relatórios",
        url: "/reports",
        icon: BarChart3,
        isActive: true,
        items: [
          {
            title: "Análise Detalhada",
            url: "/reports/detailed",
          },
          {
            title: "Comparativo Temporal",
            url: "/reports/temporal",
          },
          {
            title: "Concorrência",
            url: "/reports/competition",
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
  })

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      user: {
        name: user?.name || "",
        email: user?.email || "",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    }))
  }, [user])

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
