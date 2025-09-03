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
  user: User
}

export interface UserResponse {
  message: string
  data: User
  statusCode: number
}
