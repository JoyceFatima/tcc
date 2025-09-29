/*
Este arquivo é o componente de uma página de rota no Next.js. Ele é simples e tem a única responsabilidade de renderizar o componente `AccountPage`. Essa abordagem mantém a lógica de roteamento e a estrutura da página separadas da lógica de negócios e da interface do usuário, que estão contidas no componente `AccountPage`. O objetivo é criar uma arquitetura de código limpa e modular, onde o arquivo de rota atua como um invólucro para o componente principal da página, facilitando a organização e a manutenção do projeto.
*/

import { AccountPage } from "@/components/pages/account-page"

export default function Account() {
  return <AccountPage />
}
