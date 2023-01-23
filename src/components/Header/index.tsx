import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useCart } from '../../hooks/useCart'
import { Container, IconButton, TotalItems } from './styles'

const Header = () => {
  const { cartState } = useCart()
  const totalItems = cartState.cartItems.length

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" width={84.95} height={40} />
      </Link>
      <Link to="/checkout/cart">
        <IconButton title="Ir ao carrinho">
          <ShoppingCart size={22} weight="fill" />
        </IconButton>
        <TotalItems>{totalItems}</TotalItems>
      </Link>
    </Container>
  )
}

export default Header
