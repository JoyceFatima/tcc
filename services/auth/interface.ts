/*
Este arquivo define as interfaces TypeScript para as estruturas de dados usadas na autenticação e registro de usuários. Ele atua como um "contrato" de dados, garantindo que as informações trocadas entre o frontend e o backend sigam um formato consistente.

- `User`: Representa a estrutura completa de um usuário, incluindo informações pessoais, dados de contato e metadados de tempo.
- `Data`: Agrupa o token de autenticação e os dados do usuário após um login bem-sucedido.
- `AuthResponse`: Define a estrutura da resposta HTTP completa da API de autenticação, que inclui uma mensagem, os dados (`Data`) e o código de status.
- `Business`: Descreve a estrutura para os dados de um negócio, como nome, endereço e orçamento.
- `IRegister`: É a interface principal para o processo de registro, combinando partes opcionais das interfaces `User` (incluindo a senha) e `Business`. Isso permite que o sistema crie um novo usuário e associe-o a um negócio em uma única operação.
*/

export interface User {
  id: string
  email: string
  phone: string
  document: string
  name: string
  lastName: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
  userRoles: any[]
}
export interface Data {
  token: string
  user: User
}
export interface AuthResponse {
  message: string
  data: Data
  statusCode: number
}

export interface Business {
  id: string
  name: string
  description: string
  address: string
  budget: number
  businessTypeId: string
  targetAudienceId: string
}

export interface IRegister {
  user: Partial<User & { password?: string }>
  business: Partial<Business>
}
