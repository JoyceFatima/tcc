import axios from "axios"
import Cookies from "js-cookie"
import service from "@/configs/service.config"
import { AuthResponse, Data } from "./interface"

class AuthService {
  async login(email: string, password: string): Promise<Data> {
    const response = await service.post<AuthResponse>("/auth/login", { email, password }).then((res) => res.data)
    const { token } = response.data
    Cookies.set("token", token)
    return response.data
  }

  async renewToken(token: string): Promise<Data> {
    const response = await service.post<AuthResponse>("/auth/renew-token", { token }).then((res) => res.data)
    Cookies.set("token", response.data.token)
    return response.data
  }
}

export const authService = new AuthService()
