/*
Este arquivo define a classe `RoleService`, que centraliza a comunicação com a API para gerenciar as roles.
Ele utiliza a instância do `axios` (`service`) para realizar as requisições HTTP.

- **`getAll()`**: Realiza uma requisição GET para a rota `/roles` para buscar e retornar a lista de todas as roles cadastradas.

A exportação de uma instância da classe (`roleService`) permite que outros módulos da aplicação acessem e utilizem esses métodos de forma organizada.
*/

import service from "@/configs/service.config"
import type { IRole, RolesResponse } from "./interface"

class RoleService {
  async getAll(): Promise<IRole[]> {
    const response = await service.get<RolesResponse>("/roles").then((res) => res.data)
    return response.data
  }
}

export const roleService = new RoleService()
