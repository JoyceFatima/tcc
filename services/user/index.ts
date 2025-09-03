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
