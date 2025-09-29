/*
Este arquivo é o componente de uma página de erro 404 para uma aplicação Next.js. Ele é exibido quando o usuário tenta acessar uma URL que não existe. A página é construída usando componentes da biblioteca de UI, como `Button`, `Card`, `CardHeader` e `CardContent`, para apresentar uma interface amigável e informativa. A estrutura da página é um container centralizado (`div`) que ocupa a altura total da tela e exibe um card. O card contém o título "404" e uma mensagem de erro ("Ops! Não encontramos a página que você procurou."). O código foca em fornecer uma experiência de usuário simples e clara para lidar com páginas não encontradas, direcionando o usuário para a página inicial através de um link.
*/

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <CardHeader>
        <CardTitle className="text-3xl text-center">404</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-muted-foreground text-center">Ops! Não encontramos a página que você procurou.</p>
      </CardContent>
    </div>
  )
}
