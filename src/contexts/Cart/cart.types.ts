import { Dispatch, ReactNode } from 'react'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  tags: string[]
  quantityInCart: number
  totalPricePerItem: number
}

export interface CartState {
  cartItems: Product[]
}

export interface CartAction {
  type: 'ADD_TO_CART' | 'DECREMENT' | 'REMOVE_ITEM_FROM_CART' | 'CLEAR_CART'
  payload: any
}

export interface CartContextType {
  state: CartState
  dispatch: Dispatch<CartAction>
}

export interface CartProviderProps {
  children: ReactNode
}
