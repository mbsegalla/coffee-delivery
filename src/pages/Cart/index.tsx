import { AdressForm } from '../../components/AdressForm'
import CafesCart from '../../components/CafesCart'
import PaymentMethod from '../../components/PaymentMethod'
import { useCart } from '../../hooks/useCart'
import EmptyCart from './components/EmptyCart'
import { Container, Content } from './styles'

const Cart = () => {
  const { cartState } = useCart()

  if (cartState.cartItems.length <= 0) {
    return <EmptyCart />
  }

  return (
    <Container>
      <Content>
        <AdressForm />
        <PaymentMethod />
      </Content>
      <CafesCart />
    </Container>
  )
}

export default Cart
