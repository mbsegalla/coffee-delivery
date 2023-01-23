import { AdressForm } from '../../components/AdressForm'
import CafesCart from '../../components/CafesCart'
import { useCart } from '../../hooks/useCart'
import EmptyCart from './components/EmptyCart'
import { Container } from './styles'

const Cart = () => {
  const { cartState } = useCart()

  if (cartState.cartItems.length <= 0) {
    return <EmptyCart />
  }

  return (
    <Container>
      <AdressForm />
      <CafesCart />
    </Container>
  )
}

export default Cart
