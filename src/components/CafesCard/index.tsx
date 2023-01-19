import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import cafesData from '../../data/cafes'
import { formatPrice } from '../../utils/formatPrice'
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
  // CartButtonDefault,
} from './styles'

const CafesCard = () => {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardArea>
        {cafesData.map((coffe) => (
          <Card key={coffe.id}>
            <Image src={coffe.image} alt={coffe.name} />
            <Tag>
              {coffe.tags.map((tag) => (
                <CoffeTag key={tag}>{tag}</CoffeTag>
              ))}
            </Tag>
            <CoffeName>{coffe.name}</CoffeName>
            <CoffeDescription>{coffe.description}</CoffeDescription>
            <CoffeFooter>
              <div>
                <RealSign>R$</RealSign>
                <CoffePrice>{formatPrice(coffe.price)}</CoffePrice>
              </div>
              <ButtonsFooter>
                <SelectQtyCafes>
                  <Button>
                    <Minus weight="fill" />
                  </Button>
                  <span>1</span>
                  <Button>
                    <Plus weight="fill" />
                  </Button>
                </SelectQtyCafes>
                <CartButton title="Adicionar no carrinho">
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
