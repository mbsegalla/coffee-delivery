import { createContext, ReactNode, useReducer } from 'react'
import { cartReducer } from './cartReducer'

interface CartContextData {
  cartItems: {
    id: number
    name: string
    price: number
    quantity: number
  }[]
  addToCart: (item: any) => void
  decrement: (item: any) => void
}

interface CartProviderProps {
  children: ReactNode
}

const initialState: CartContextData = {
  cartItems: [],
  addToCart: () => { },
  decrement: () => { },
}

export const CartContext = createContext<CartContextData>({
  cartItems: [],
  addToCart: () => { },
  decrement: () => { },
})

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (item: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }

  const decrement = (item: any) => {
    dispatch({ type: 'DECREMENT', payload: item })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
