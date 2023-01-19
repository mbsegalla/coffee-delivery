import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import cafesData from '../../data/cafes'
import {
  Card,
  CardArea,
  CoffeDescription,
  CoffeName,
  CoffeFooter,
  CoffeTag,
  Container,
  RealSign,
  Tag,
  CoffePrice,
  SelectQtyCafes,
  CartButton,
  ButtonsFooter,
} from './styles'

const CafesCard = () => {
  return (
    <Container>
      <h2>Nossos cafés</h2>
      <CardArea>
        {cafesData.map((cafe) => (
          <Card key={cafe.id}>
            <img src={cafe.image} />
            <Tag>
              {cafe.tags.map((tag) => (
                <CoffeTag key={tag}>{tag}</CoffeTag>
              ))}
            </Tag>
            <CoffeName>{cafe.name}</CoffeName>
            <CoffeDescription>{cafe.description}</CoffeDescription>
            <CoffeFooter>
              <div>
                <RealSign>R$</RealSign>
                <CoffePrice>{cafe.price}</CoffePrice>
              </div>
              <ButtonsFooter>
                <SelectQtyCafes>
                  <button>
                    <Minus weight="fill" />
                  </button>
                  <span>0</span>
                  <button>
                    <Plus weight="fill" />
                  </button>
                </SelectQtyCafes>
                <CartButton>
                  <ShoppingCart weight="fill" />
                </CartButton>
              </ButtonsFooter>
            </CoffeFooter>
          </Card>
        ))}
      </CardArea>
    </Container>
  )
}

export default CafesCard
