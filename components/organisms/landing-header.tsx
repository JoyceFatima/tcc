"use client"

import { Button } from "@/components/ui/button"
import { Store, Menu } from "lucide-react"
import { useState } from "react"

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Store className="size-4" />
          </div>
          <span className="font-bold text-xl">Meu Negócio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
            Exemplos
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <a href="/login">Entrar</a>
          </Button>
          <Button asChild>
            <a href="/register">Começar</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-5 w-5" />
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                  Recursos
                </a>
                <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                  Como Funciona
                </a>
                <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
                  Exemplos
                </a>
                <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                  Preços
                </a>
              </nav>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" asChild className="justify-start">
                  <a href="/login">Entrar</a>
                </Button>
                <Button asChild className="justify-start">
                  <a href="/register">Começar Grátis</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
