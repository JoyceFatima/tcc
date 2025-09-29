/*
Este arquivo é o componente da página de "Termos de Uso". Ele exibe um documento com os termos legais da aplicação, utilizando componentes de UI como `Card`, `CardHeader` e `CardContent` para estruturar o conteúdo de forma clara e organizada.

A página começa com um link de "Voltar ao início" para facilitar a navegação. O conteúdo principal está dentro de um `Card`, que inclui um título (`CardTitle`), uma descrição com a data da última atualização (`CardDescription`) e as seções dos termos. Cada seção é separada por um componente `Separator`, contendo um título (`<h2>`) e um parágrafo (`<p>`) com texto de exemplo (lorem ipsum).

O componente é uma página estática que apresenta informações importantes ao usuário de forma visualmente agradável e de fácil leitura.
*/

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
            <CardTitle className="text-3xl font-bold">Termos de Uso</CardTitle>
            <CardDescription>Última atualização: {new Date().toLocaleDateString("pt-BR")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Uso do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</li>
                <li>Et quasi architecto beatae vitae dicta sunt explicabo</li>
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
                <li>Aut odit aut fugit, sed quia consequuntur magni dolores</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Responsabilidades do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato conosco através do nosso{" "}
                <Link href="/help" className="text-primary hover:underline">
                  formulário de ajuda
                </Link>{" "}
                ou pelo email: legal@exemplo.com
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
