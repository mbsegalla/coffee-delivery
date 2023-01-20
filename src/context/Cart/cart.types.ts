import { Dispatch, ReactNode } from 'react'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  tags: string[]
  quantityInCart: number
}

export interface CartState {
  cartItems: Product[]
}

export interface CartAction {
  type: 'ADD_TO_CART' | 'DECREMENT' | 'UPDATE_CART_ITEMS'
  payload: any
}

export interface CartContextType {
  state: CartState
  dispatch: Dispatch<CartAction>
}

export interface CartProviderProps {
  children: ReactNode
}
