import { useCallback, useContext, useMemo } from 'react'
import { Product } from '../context/Cart/cart.types'
import { CartContext } from '../context/Cart/CartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  const { state: cartState, dispatch } = context

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const addToCart = useCallback(
    (item: Product) => {
      dispatch({ type: 'ADD_TO_CART', payload: item })
    },
    [dispatch],
  )

  const decrement = useCallback(
    (item: Product) => {
      dispatch({ type: 'DECREMENT', payload: item })
    },
    [dispatch],
  )

  const removeItemFromCart = useCallback(
    (item: Product) => {
      dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item })
    },
    [dispatch],
  )

  return useMemo(
    () => ({ cartState, addToCart, decrement, removeItemFromCart }),
    [cartState, addToCart, decrement, removeItemFromCart],
  )
}
