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
  CoffeeDescription,
  CoffeeName,
  CoffeeFooter,
  CoffeeTag,
  Container,
  RealSign,
  Tag,
  CoffeePrice,
  CartButton,
  ButtonsFooter,
  Title,
  Image,
} from './styles'

const CafesCard = () => {
  const { cartState, addToCart, decrement } = useCart()

  const qtyInCart = (coffee: Product) => {
    const item = cartState.cartItems.find((item) => item.id === coffee.id)
    return item ? item.quantityInCart : 0
  }

  const itemExists = (coffee: Product) => {
    const item = cartState.cartItems.find((item) => item.id === coffee.id)
    return !!item
  }

  const handleAddToCart = (coffee: Product) => {
    if (!itemExists(coffee)) {
      toast.success('Café adicionado no carrinho!')
    }
    addToCart(coffee)
  }

  const handleDecrement = (coffee: Product) => {
    decrement(coffee)
  }

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardArea>
        {cafesData.map((coffee: any) => (
          <Card key={coffee.id}>
            <Image src={coffee.image} alt={coffee.name} />
            <Tag>
              {coffee.tags.map((tag: any) => (
                <CoffeeTag key={tag}>{tag}</CoffeeTag>
              ))}
            </Tag>
            <CoffeeName>{coffee.name}</CoffeeName>
            <CoffeeDescription>{coffee.description}</CoffeeDescription>
            <CoffeeFooter>
              <div>
                <RealSign>R$</RealSign>
                <CoffeePrice>{formatPrice(coffee.price)}</CoffeePrice>
              </div>
              <ButtonsFooter>
                <SelectQtyCafes
                  size="large"
                  coffee={coffee}
                  handleDecrement={handleDecrement}
                  handleAddToCart={handleAddToCart}
                  qtyInCart={qtyInCart}
                />
                <CartButton
                  onClick={() => handleAddToCart(coffee)}
                  title="Adicionar no carrinho"
                >
                  <ShoppingCart weight="fill" />
                </CartButton>
              </ButtonsFooter>
            </CoffeeFooter>
          </Card>
        ))}
      </CardArea>
    </Container>
  )
}

export default CafesCard
