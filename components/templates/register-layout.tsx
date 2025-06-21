import type React from "react"

interface RegisterLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function RegisterLayout({ children, title, subtitle }: RegisterLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-2">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
