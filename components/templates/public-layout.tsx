import type React from "react"
import { LandingHeader } from "@/components/organisms/landing-header"
import { LandingFooter } from "@/components/organisms/landing-footer"

interface PublicLayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export function PublicLayout({ children, showHeader = true, showFooter = true }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {showHeader && <LandingHeader />}
      <main className={showHeader ? "" : "min-h-screen"}>{children}</main>
      {showFooter && <LandingFooter />}
    </div>
  )
}
