import { HelpForm } from "@/components/organisms/help-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Phone, Mail, HelpCircle, Book, Video } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl space-y-8 px-4">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao início
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Central de Ajuda</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas rápidas ou entre em contato conosco.
          </p>
        </div>

        <div>
          <HelpForm />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Outros Canais de Contato</CardTitle>
              <CardDescription>Escolha a forma mais conveniente para você</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs text-muted-foreground">suporte@exemplo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Telefone</p>
                  <p className="text-xs text-muted-foreground">(11) 1234-5678</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
