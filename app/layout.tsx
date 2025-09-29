/*
Este arquivo é o componente de layout raiz (`RootLayout`) de uma aplicação Next.js. Ele define a estrutura básica de todas as páginas da aplicação.
- **Importações**: Ele importa a tipagem do React, a tipagem de metadados do Next.js e a fonte 'Inter' do Google Fonts para otimização de desempenho. Ele também importa o arquivo de estilos globais (`globals.css`) e o `AuthProvider`, que é um provedor de contexto para gerenciar a autenticação do usuário.
- **Metadados**: A constante `metadata` define informações importantes para SEO e para o cabeçalho da página, como o título e a descrição.
- **Componente Principal**: O componente `RootLayout` recebe `children` (o conteúdo das páginas aninhadas) como uma propriedade e o envolve na estrutura HTML básica.
- **Estrutura HTML**: Ele renderiza a tag `<html>` com o idioma "pt-BR" e a tag `<body>`. Dentro do `<body>`, ele aplica a classe da fonte 'Inter' e, mais importante, envolve todo o conteúdo com o `AuthProvider`. Isso garante que todas as páginas e componentes dentro da aplicação tenham acesso ao contexto de autenticação, o que é essencial para o controle de acesso e para exibir informações do usuário em toda a aplicação.
*/

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Análise inteligente de localização para seu negócio",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
