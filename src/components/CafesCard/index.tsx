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
  Button,
  Title,
  Image,
} from './styles'

const CafesCard = () => {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardArea>
        {cafesData.map((cafe) => (
          <Card key={cafe.id}>
            <Image src={cafe.image} alt={cafe.name} />
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
                  <Button>
                    <Minus weight="fill" />
                  </Button>
                  <span>0</span>
                  <Button>
                    <Plus weight="fill" />
                  </Button>
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
