import { setToLocalStorage } from '../../utils/localStorage'
import { CartAction, CartState, Product } from './cart.types'

export const cartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action

  const itemExists = state.cartItems.find(
    (item: Product) => item.id === payload.id,
  )

  const totalPricePerItem = itemExists
    ? itemExists?.price * itemExists?.quantityInCart
    : 0

  const updateCartItems = (cartItems: Product[]) => {
    if (itemExists) {
      return cartItems.map((item: Product) =>
        item.id === payload.id
          ? {
            ...item,
            quantityInCart: item.quantityInCart + 1,
            totalPricePerItem: totalPricePerItem + item.price,
          }
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
        ? {
          ...item,
          quantityInCart: item.quantityInCart - 1,
          totalPricePerItem: totalPricePerItem - item.price,
        }
        : item,
    )
  }

  const removeItemFromCart = (cartItems: Product[]) => {
    return cartItems.filter((item: Product) => item.id !== payload.id)
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
    case 'REMOVE_ITEM_FROM_CART':
      setToLocalStorage('cartItems', removeItemFromCart(state.cartItems))
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems),
      }
    case 'CLEAR_CART':
      setToLocalStorage('cartItems', [])
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}
