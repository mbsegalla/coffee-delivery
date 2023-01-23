import { Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { AdressContext } from '../../context/Adress/AdressContext'
import { Product } from '../../context/Cart/cart.types'
import { PaymentMethodContext } from '../../context/PaymentMethod/PaymentMethodContext'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import SelectQtyCafes from '../selectQtyCafes'
import {
  Content,
  CoffeeName,
  CoffeePrice,
  Container,
  ItemsContent,
  ItemsCard,
  ItemsContainer,
  RemoveButton,
  Title,
  ButtonsContainer,
  Divider,
  InfoPayment,
  ConfirmButton,
  TextInfo,
  TextValue,
  Total,
  Haha,
} from './styles'

const CafesCart = () => {
  const { cartState, addToCart, decrement, removeItemFromCart } = useCart()
  const { adress } = useContext(AdressContext)
  console.log('adress', adress)
  const { paymentMethod } = useContext(PaymentMethodContext)
  console.log('paymentMethod', paymentMethod)
  const fee = 3.5
  const totalValue = cartState.cartItems.reduce(
    (acc, item: Product) => acc + item.price * item.quantityInCart,
    0,
  )

  const totalMoreFee = totalValue + fee

  const handleAddToCart = (coffee: Product) => {
    addToCart(coffee)
  }

  const handleDecrement = (coffee: Product) => {
    decrement(coffee)
  }

  const handleRemoveFromCart = (coffee: Product) => {
    toast.success('Café removido do carrinho!')
    removeItemFromCart(coffee)
  }

  const qtyInCart = (coffee: Product) => {
    const item = cartState.cartItems.find((item) => item.id === coffee.id)
    return item ? item.quantityInCart : 0
  }

  return (
    <Container>
      <Title>Cafés selecionados</Title>
      <ItemsCard>
        {cartState.cartItems.map((coffee: Product) => (
          <React.Fragment key={coffee.id}>
            <ItemsContainer>
              <ItemsContent>
                <img src={coffee.image} alt="" width={64} height={64} />
                <Content>
                  <CoffeeName>{coffee.name}</CoffeeName>
                  <ButtonsContainer>
                    <SelectQtyCafes
                      size="small"
                      coffee={coffee}
                      handleDecrement={handleDecrement}
                      handleAddToCart={handleAddToCart}
                      qtyInCart={qtyInCart}
                    />
                    <RemoveButton onClick={() => handleRemoveFromCart(coffee)}>
                      <Trash />
                      remover
                    </RemoveButton>
                  </ButtonsContainer>
                </Content>
              </ItemsContent>
              <CoffeePrice>
                R$ {formatPrice(coffee.totalPricePerItem || coffee.price)}
              </CoffeePrice>
            </ItemsContainer>
            <Divider />
          </React.Fragment>
        ))}
        <Haha>
          <InfoPayment>
            <TextInfo>Total de items</TextInfo>
            <TextValue>R$ {formatPrice(totalValue)}</TextValue>
          </InfoPayment>
          <InfoPayment>
            <TextInfo>Entrega</TextInfo>
            <TextValue>R$ 3,50</TextValue>
          </InfoPayment>
          <InfoPayment>
            <Total>Total</Total>
            <Total>R$ {formatPrice(totalMoreFee)}</Total>
          </InfoPayment>
        </Haha>
        <ConfirmButton>Confirmar pedido</ConfirmButton>
      </ItemsCard>
    </Container>
  )
}

export default CafesCart
