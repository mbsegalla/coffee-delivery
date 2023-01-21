import { Trash } from 'phosphor-react'
import React from 'react'
import { Product } from '../../context/Cart/cart.types'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import SelectQtyCafes from '../selectQtyCafes'
import {
  Content,
  CoffeName,
  CoffePrice,
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
  const fee = 3.5
  const totalValue = cartState.cartItems.reduce(
    (acc, item: Product) => acc + item.price * item.quantityInCart,
    0,
  )

  const totalMoreFee = totalValue + fee

  const handleAddToCart = (coffe: Product) => {
    addToCart(coffe)
  }

  const handleDecrement = (coffe: Product) => {
    decrement(coffe)
  }

  const handleRemoveFromCart = (coffe: Product) => {
    removeItemFromCart(coffe)
  }

  const qtyInCart = (coffe: Product) => {
    const item = cartState.cartItems.find((item) => item.id === coffe.id)
    return item ? item.quantityInCart : 0
  }

  return (
    <Container>
      <Title>Cafés selecionados</Title>
      <ItemsCard>
        {cartState.cartItems.map((coffe: Product) => (
          <React.Fragment key={coffe.id}>
            <ItemsContainer>
              <ItemsContent>
                <img src={coffe.image} alt="" width={64} height={64} />
                <Content>
                  <CoffeName>{coffe.name}</CoffeName>
                  <ButtonsContainer>
                    <SelectQtyCafes
                      size="small"
                      coffe={coffe}
                      handleDecrement={handleDecrement}
                      handleAddToCart={handleAddToCart}
                      qtyInCart={qtyInCart}
                    />
                    <RemoveButton onClick={() => handleRemoveFromCart(coffe)}>
                      <Trash />
                      remover
                    </RemoveButton>
                  </ButtonsContainer>
                </Content>
              </ItemsContent>
              <CoffePrice>
                R$ {formatPrice(coffe.totalPricePerItem || coffe.price)}
              </CoffePrice>
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
