"use client"

import { authService } from "@/services"
import { User } from "@/services/auth/interface"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import Cookies from "js-cookie"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  renewToken: () => Promise<void>
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

  useEffect(() => {
    renewToken()
  }, [])

  const value = useMemo(() => ({ user, login, renewToken }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider }
export const useAuth = () => useContext(AuthContext)
