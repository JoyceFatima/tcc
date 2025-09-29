/*
Este arquivo define a classe `AuthService`, responsável por centralizar e gerenciar todas as operações de autenticação da aplicação, como login, registro e renovação de token. Ele utiliza a biblioteca `axios` (importada como `service`) para fazer requisições HTTP para a API de autenticação.

- **`login(email, password)`**: Envia uma requisição POST para a rota `/auth/login` com as credenciais do usuário. Em caso de sucesso, o token de autenticação recebido é armazenado em um cookie usando a biblioteca `js-cookie`, garantindo que o usuário permaneça autenticado.
- **`register(data)`**: Envia uma requisição POST para a rota `/users` com os dados do novo usuário para registro.
- **`renewToken(token)`**: Envia uma requisição POST para `/auth/renew-token` para validar um token existente e obter um novo, mantendo a sessão do usuário ativa. O novo token também é salvo nos cookies.

A exportação de uma instância da classe (`authService`) permite que outros módulos da aplicação importem e utilizem esses métodos de forma direta, mantendo o código de autenticação organizado e reutilizável.
*/

import axios from "axios"
import Cookies from "js-cookie"
import service from "@/configs/service.config"
import { AuthResponse, Data, IRegister } from "./interface"

class AuthService {
  async login(email: string, password: string): Promise<Data> {
    const response = await service.post<AuthResponse>("/auth/login", { email, password }).then((res) => res.data)
    const { token } = response.data
    Cookies.set("token", token)
    return response.data
  }

  async register(data: IRegister): Promise<void> {
    await service.post("/users", data).then((res) => res.data)
  }

  async renewToken(token: string): Promise<Data> {
    const response = await service.post<AuthResponse>("/auth/renew-token", { token }).then((res) => res.data)
    Cookies.set("token", response.data.token)
    return response.data
  }
}

export const authService = new AuthService()
