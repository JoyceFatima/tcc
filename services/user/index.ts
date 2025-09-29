/*
Este arquivo define a classe `UserService`, responsável por centralizar a comunicação com a API para gerenciar os dados do usuário logado. Ele utiliza a instância do `axios` (`service`) para realizar as requisições HTTP. A classe contém dois métodos principais:

1.  **`getMe()`**: Realiza uma requisição GET para a rota `/users/find/me`. O objetivo é buscar e retornar os dados do usuário autenticado a partir do backend, utilizando o token de autenticação enviado automaticamente pelo interceptor do `service`.
2.  **`updateMe(data)`**: Realiza uma requisição PATCH para a rota `/users/update/me`. Este método é utilizado para atualizar os dados do usuário, enviando as informações parciais fornecidas.

A exportação de uma instância da classe (`userService`) permite que outros módulos da aplicação acessem e utilizem esses métodos de forma centralizada e organizada, simplificando a interação com a API de usuários.
*/

import axios from "axios"
import Cookies from "js-cookie"
import service from "@/configs/service.config"
import { UserResponse, Data, User } from "./interface"

class UserService {
  async getMe(): Promise<User> {
    const response = await service.get<UserResponse>("/users/find/me").then((res) => res.data)
    return response.data
  }

  async updateMe(data: Partial<User>): Promise<void> {
    await service.patch<UserResponse>("/users/update/me", data).then((res) => res.data)
  }
}

export const userService = new UserService()
