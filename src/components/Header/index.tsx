import { ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.png'
import { Container, IconContainer } from './styles'

const Header = () => {
  return (
    <Container>
      <img src={logo} />
      <IconContainer>
        <ShoppingCart size={32} weight="fill" />
      </IconContainer>
    </Container>
  )
}

export default Header
