import { ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.png'
import { Container, IconButton } from './styles'

const Header = () => {
  return (
    <Container>
      <img src={logo} />
      <IconButton title="Ir ao carrinho">
        <ShoppingCart size={22} weight="fill" />
      </IconButton>
    </Container>
  )
}

export default Header
