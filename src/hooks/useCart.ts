import { useCallback, useContext, useMemo } from 'react'
import { CartContext } from '../context/Cart/CartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  const { state: cartItems, dispatch } = context

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const addToCart = useCallback(
    (item: any) => {
      dispatch({ type: 'ADD_TO_CART', payload: item })
    },
    [dispatch],
  )

  const decrement = useCallback(
    (item: any) => {
      dispatch({ type: 'DECREMENT', payload: item })
    },
    [dispatch],
  )

  return useMemo(
    () => ({ cartItems, addToCart, decrement }),
    [cartItems, addToCart, decrement],
  )
}
