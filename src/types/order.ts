export interface Order {
  id: number
  userId: number
  productId: number
  quantity: number
  totalPrice: number
  status: string
  createdAt: string
}

export interface OrderResponse {
  data: Order[]
  total: number
  totalPages: number
  page: number
  limit: number
}

export interface UpdateOrderData {
  status?: string
  quantity?: number
}