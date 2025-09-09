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

export interface Business {
  id: string
  name: string
  description: string
  address: string
  budget: number
  businessTypeId: string
  targetAudienceId: string
}

export interface IRegister {
  user: Partial<User & { password?: string }>
  business: Partial<Business>
}
