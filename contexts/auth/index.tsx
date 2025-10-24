/*
Este arquivo cria um **`AuthProvider`** que gerencia a autenticação do usuário em um aplicativo React, utilizando o Next.js. Ele implementa um **contexto (`AuthContext`)** que armazena o estado do usuário (`user`) e fornece funções para ações de autenticação, como `login`, `register` e `renewToken`.

**Como funciona:**
- **Estado do usuário**: O estado do usuário é mantido com `useState`.
- **Login e Registro**: As funções `login` e `register` chamam um serviço externo (`authService`) para autenticar o usuário ou criar uma nova conta. Após o sucesso, elas atualizam o estado do usuário.
- **Renovação de Token**: A função `renewToken` verifica se um token de autenticação existe nos cookies. Se sim, ela o usa para renovar a sessão do usuário no backend e manter o estado de autenticação persistente mesmo após a página ser recarregada.
- **`useMemo`**: Garante que o objeto de contexto (`value`) só seja recriado quando o estado do `user` mudar, otimizando o desempenho e evitando re-renderizações desnecessárias.
- **`useAuth`**: Um hook personalizado é exportado para permitir que qualquer componente da aplicação acesse o estado e as funções de autenticação de forma simples, sem a necessidade de passar props manualmente.

Em resumo, este provedor centraliza a lógica de autenticação, tornando-a acessível a toda a aplicação de maneira limpa e eficiente.
*/

"use client"

import { authService } from "@/services"
import { IRegister, User } from "@/services/auth/interface"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import Cookies from "js-cookie"
import { BusinessProvider } from "../business"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  renewToken: () => Promise<void>
  register: (data: IRegister) => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    const response = await authService.login(email, password)
    setUser(response.user)
  }
  const renewToken = async () => {
    const token = Cookies.get("token")
    if (token) {
      const response = await authService.renewToken(token)
      setUser(response.user)
    }
  }
  const register = async (data: IRegister) => {
    await authService.register(data).then(() => {
      login(data.user.email!, data.user.password!)
    })
  }

  useEffect(() => {
    renewToken()
  }, [])

  const value = useMemo(() => ({ user, login, renewToken, register }), [user])
  return (
    <AuthContext.Provider value={value}>
      <BusinessProvider>{children}</BusinessProvider>
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export const useAuth = () => useContext(AuthContext)
