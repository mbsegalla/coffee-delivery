import { createContext, useEffect, useMemo, useReducer } from 'react'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../../utils/localStorage'
import { CartContextType, CartProviderProps } from './cart.types'
import { cartReducer } from './cartReducer'

export const CartContext = createContext<CartContextType>({
  state: {
    cartItems: [],
  },
  dispatch: () => null,
})

export const CartProvider = ({ children }: CartProviderProps) => {
  const initialState = getFromLocalStorage('cartItems') || []
  const [state, dispatch] = useReducer(cartReducer, { cartItems: initialState })
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  useEffect(() => {
    const localCartItems = getFromLocalStorage('cartItems')
    if (!localCartItems) {
      setToLocalStorage('cartItems', [])
    }
  }, [])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
