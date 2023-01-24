import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/Order/OrderContext'
import delivery from '../../assets/delivery.png'
import theme from '../../styles/theme'
import {
  Container,
  Content,
  ContentText,
  Info,
  InfoContent,
  OrderInfoCard,
  OrderInfoCardContainer,
  RoundedIcon,
  Text,
  Title,
} from './styles'

const ConfirmedOrder = () => {
  const { orders } = useContext(OrderContext)
  console.log(orders)

  return (
    <Container>
      <Title>Uhu! Pedido confirmado</Title>
      <Text>Agora é só aguardar que logo o café chegará até você</Text>
      <OrderInfoCardContainer>
        <OrderInfoCard>
          <Content>
            <InfoContent>
              <RoundedIcon style={{ backgroundColor: theme.purple }}>
                <MapPin weight="fill" />
              </RoundedIcon>
              <Info>
                <ContentText>
                  Entrega em <strong>Avenida salomão abraão, 2453</strong>
                </ContentText>
                <span>Uberlândia - Minas Gerais, MG</span>
              </Info>
            </InfoContent>
            <InfoContent>
              <RoundedIcon style={{ backgroundColor: theme.yellow }}>
                <Timer weight="fill" />
              </RoundedIcon>
              <Info>
                <ContentText>Previsão de entrega</ContentText>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </Info>
            </InfoContent>
            <InfoContent>
              <RoundedIcon style={{ backgroundColor: theme['yellow-dark'] }}>
                <CurrencyDollar weight="fill" />
              </RoundedIcon>
              <Info>
                <ContentText>Pagamento na entrega</ContentText>
                <span>
                  <strong>Cartão de crédito</strong>
                </span>
              </Info>
            </InfoContent>
          </Content>
        </OrderInfoCard>
        <div>
          <img src={delivery} />
        </div>
      </OrderInfoCardContainer>
    </Container>
  )
}

export default ConfirmedOrder
