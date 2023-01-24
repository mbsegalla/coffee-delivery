import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/Order/OrderContext'
import delivery from '../../assets/delivery.png'
import {
  Container,
  Content,
  ContentText,
  OrderInfoCard,
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <OrderInfoCard>
          <Content>
            <div>
              <RoundedIcon style={{ backgroundColor: '#8047F8' }}>
                <MapPin weight="fill" />
              </RoundedIcon>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <ContentText>
                  Entrega em <strong>Avenida salomão abraão, 2453</strong>
                </ContentText>
                <span>Uberlândia - Minas Gerais, MG</span>
              </div>
            </div>
            <div>
              <RoundedIcon style={{ backgroundColor: '#DBAC2C' }}>
                <Timer weight="fill" />
              </RoundedIcon>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ContentText>Previsão de entrega</ContentText>
                <span>20 min - 30 min</span>
              </div>
            </div>
            <div>
              <RoundedIcon style={{ backgroundColor: '#C47F17' }}>
                <CurrencyDollar weight="fill" />
              </RoundedIcon>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ContentText>Pagamento na entrega</ContentText>
                <span>Cartão de crédito</span>
              </div>
            </div>
          </Content>
        </OrderInfoCard>
        <div>
          <img src={delivery} />
        </div>
      </div>
    </Container>
  )
}

export default ConfirmedOrder
