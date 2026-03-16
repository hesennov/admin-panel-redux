export interface User {
  id: number
  name: string
  surname: string
  email: string
  active: boolean
}

export interface UserResponse {
  data: User[]
  page: number
  limit: number
  totalPages: number
  total: number
}

export interface CreateUserData {
  name: string
  surname: string
  email: string
  active?: boolean
}

export interface UpdateUserData {
  name?: string
  surname?: string
  email?: string
  active?: boolean
}