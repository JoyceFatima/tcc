/*
Este arquivo define as interfaces TypeScript para as estruturas de dados usadas no gerenciamento de roles.

- `IRole`: Representa a estrutura completa de uma role, incluindo seu nome, descrição, permissões e outros metadados.
- `RoleResponse`: Define a estrutura da resposta da API ao buscar uma única role.
- `RolesResponse`: Define a estrutura da resposta da API ao buscar uma lista de roles.
*/

export interface IRole {
  id: string
  name: string
  description: string
  permissions: string[]
  usersCount: number
  createdAt: string
  isActive: boolean
}

export interface RolesResponse {
  data: IRole[]
}
