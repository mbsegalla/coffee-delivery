import { useCart } from '../../hooks/useCart'
import { Container, ItemsCard, Title } from './styles'

const CafesCart = () => {
  const { cartItems } = useCart()
  console.log(cartItems)

  return (
    <Container>
      <Title>Cafés selecionados</Title>
      <ItemsCard>
        <div>
          <div>
            <img />
          </div>
          <div>
            <span>Expresso Tradicional</span>
            <span>R$ 9,90</span>
          </div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
            <button>Remover</button>
          </div>
        </div>
      </ItemsCard>
    </Container>
  )
}

export default CafesCart
