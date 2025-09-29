/*
Este arquivo é o componente da página inicial (`Home`) de uma aplicação Next.js.
Ele é um componente simples que importa e renderiza o componente `LandingPage`,
que provavelmente contém toda a estrutura e o conteúdo visual da página de
destino. O objetivo é manter o código da página o mais limpo possível,
delegando a renderização e a lógica da interface para um componente
separado, seguindo o princípio de separação de responsabilidades.
*/

import { LandingPage } from "@/components/pages/landing-page"

export default function Home() {
  return <LandingPage />
}
