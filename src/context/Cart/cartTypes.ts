export interface Product {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  tags: string[]
}

export interface CartContextData {
  cartItems: Product[]
  addToCart: (item: any) => void
  decrement: (item: any) => void
}

export type CartState = {
  cartItems: Product[]
}

export type CartAction = {
  type: string
  payload: {
    id: number
  }
}
