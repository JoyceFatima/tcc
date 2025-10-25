import { ReactNode } from "react"
import { IRegister } from "@/services/auth/interface"

export interface IUser {
  id: string
  email: string
  phone: string
  document: string
  name: string
  lastName: string
  createdAt: string
  updatedAt: string
  deletedAt: null | string
}

export interface IAuthContext {
  user: IUser | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: IRegister) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: ReactNode
}