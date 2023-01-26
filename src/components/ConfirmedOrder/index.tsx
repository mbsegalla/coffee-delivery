import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import delivery from '../../assets/delivery.png'
import { AdressContext } from '../../contexts/Adress/AdressContext'
import { PaymentMethodContext } from '../../contexts/PaymentMethod/PaymentMethodContext'
import theme from '../../styles/theme'
import { translatePaymentMethod } from '../../utils/translatePaymentMethod'
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
  const { adress } = useContext(AdressContext)
  const { paymentMethod } = useContext(PaymentMethodContext)

  const district = adress?.district
  const street = adress?.street
  const number = adress?.number
  const city = adress?.city
  const uf = adress?.uf
  const paymentMethodText = paymentMethod

  useEffect(() => {
    const entries = performance.getEntriesByType('navigation')
    const type = entries.map((nav) => nav.type)
    if (type[0] === 'reload') {
      window.location.href = '/'
    }
  }, [])

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
                  Entrega em <strong>{`${street}, ${number}`}</strong>
                </ContentText>
                <span>{`${district} - ${city}, ${uf}`}</span>
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
                  <strong>{translatePaymentMethod(paymentMethodText)}</strong>
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
