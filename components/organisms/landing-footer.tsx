import { Store, Mail, Phone, MapPin } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Store className="size-4" />
              </div>
              <span className="font-bold text-xl">Meu Negócio</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Análise inteligente de localização para empreendedores que querem tomar decisões baseadas em dados.
            </p>
            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@meunegocio.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div className="flex-1 md:flex md:justify-end">
            <div>
              <h3 className="font-semibold mb-3">Suporte</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <a href="/help" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-400">
          &copy; 2025 Meu Negócio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
