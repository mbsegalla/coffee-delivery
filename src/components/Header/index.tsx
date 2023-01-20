import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Container, IconButton } from './styles'

const Header = () => {
  return (
    <Container>
      <img src={logo} />
      <Link to="/checkout/cart">
        <IconButton title="Ir ao carrinho">
          <ShoppingCart size={22} weight="fill" />
        </IconButton>
      </Link>
    </Container>
  )
}

export default Header
