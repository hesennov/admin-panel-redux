export interface Product {
  id: number
  title: string
  price: number
  stock: number
  category?: string
}

export interface ProductResponse {
  data: Product[]
  total: number
  totalPages: number
  page: number
  limit: number
}

export interface UpdateProductData {
  title?: string
  price?: number
  stock?: number
}