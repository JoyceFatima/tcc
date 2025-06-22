import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao início
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl font-bold">Política de Privacidade</CardTitle>
            </div>
            <CardDescription>Última atualização: {new Date().toLocaleDateString("pt-BR")}</CardDescription>
            <div className="flex gap-2 mt-4">
              <Badge variant="secondary">
                <Lock className="mr-1 h-3 w-3" />
                Dados Protegidos
              </Badge>
              <Badge variant="secondary">
                <Eye className="mr-1 h-3 w-3" />
                Transparente
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                1. Informações que Coletamos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Tipos de dados coletados:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Informações de identificação pessoal (nome, email)</li>
                  <li>Dados de uso e navegação</li>
                  <li>Informações técnicas do dispositivo</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-green-800 mb-2">✓ Nunca compartilhamos</h4>
                    <p className="text-sm text-green-700">Dados pessoais para fins comerciais sem consentimento</p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-blue-800 mb-2">ℹ Compartilhamos apenas</h4>
                    <p className="text-sm text-blue-700">Com parceiros essenciais para o funcionamento do serviço</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline">Acesso</Badge>
                  <span className="text-muted-foreground">Solicitar cópia dos seus dados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline">Correção</Badge>
                  <span className="text-muted-foreground">Corrigir informações incorretas</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline">Exclusão</Badge>
                  <span className="text-muted-foreground">Solicitar remoção dos dados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline">Portabilidade</Badge>
                  <span className="text-muted-foreground">Transferir dados para outro serviço</span>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato através do nosso{" "}
                <Link href="/help" className="text-primary hover:underline">
                  formulário de ajuda
                </Link>{" "}
                ou pelo email: privacy@exemplo.com
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
