import { setToLocalStorage } from '../../utils/localStorage'
import { CartAction, CartState, Product } from './cart.types'

export const cartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action
  const itemExists = state.cartItems.find(
    (item: Product) => item.id === payload.id,
  )

  const updateCartItems = (cartItems: Product[]) => {
    if (itemExists) {
      return cartItems.map((item: Product) =>
        item.id === payload.id
          ? { ...item, quantityInCart: item.quantityInCart + 1 }
          : item,
      )
    }
    return [...cartItems, { ...payload, quantityInCart: 1 }]
  }

  const decrementCartItems = (cartItems: Product[]) => {
    if (itemExists?.quantityInCart === 1) {
      return cartItems.filter((item: Product) => item.id !== payload.id)
    }
    return cartItems.map((item: Product) =>
      item.id === payload.id
        ? { ...item, quantityInCart: item.quantityInCart - 1 }
        : item,
    )
  }

  const arrayNewItem = updateCartItems(state.cartItems)

  switch (type) {
    case 'ADD_TO_CART':
      setToLocalStorage('cartItems', arrayNewItem)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems),
      }
    case 'DECREMENT':
      setToLocalStorage('cartItems', decrementCartItems(state.cartItems))
      return {
        ...state,
        cartItems: decrementCartItems(state.cartItems),
      }
    case 'UPDATE_CART_ITEMS':
      return {
        ...state,
        cartItems: payload,
      }
    default:
      return state
  }
}
