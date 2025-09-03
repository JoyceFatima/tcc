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
  token: string
  user: User
}
export interface AuthResponse {
  message: string
  data: Data
  statusCode: number
}
