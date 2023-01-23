import { ShoppingCart } from 'phosphor-react'
import { toast } from 'react-toastify'
import { Product } from '../../context/Cart/cart.types'
import cafesData from '../../data/cafes'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import SelectQtyCafes from '../selectQtyCafes'
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
  CartButton,
  ButtonsFooter,
  Title,
  Image,
} from './styles'

const CafesCard = () => {
  const { cartState, addToCart, decrement } = useCart()

  const qtyInCart = (coffe: Product) => {
    const item = cartState.cartItems.find((item) => item.id === coffe.id)
    return item ? item.quantityInCart : 0
  }

  const itemExists = (coffe: Product) => {
    const item = cartState.cartItems.find((item) => item.id === coffe.id)
    return !!item
  }

  const handleAddToCart = (coffe: Product) => {
    if (!itemExists(coffe)) {
      toast.success('Café adicionado no carrinho!')
    }
    addToCart(coffe)
  }

  const handleDecrement = (coffe: Product) => {
    decrement(coffe)
  }

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardArea>
        {cafesData.map((coffe: any) => (
          <Card key={coffe.id}>
            <Image src={coffe.image} alt={coffe.name} />
            <Tag>
              {coffe.tags.map((tag: any) => (
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
                <SelectQtyCafes
                  size="large"
                  coffe={coffe}
                  handleDecrement={handleDecrement}
                  handleAddToCart={handleAddToCart}
                  qtyInCart={qtyInCart}
                />
                <CartButton
                  onClick={() => handleAddToCart(coffe)}
                  title="Adicionar no carrinho"
                >
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
