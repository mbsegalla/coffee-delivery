import { MapPinLine } from 'phosphor-react'
import {
  AdressCard,
  AdressContainer,
  AdressTitle,
  Input,
  Text,
  Title,
} from './styles'

export const AdressForm = () => {
  return (
    <AdressContainer>
      <Title>Complete seu pedido</Title>
      <AdressCard>
        <div>
          <AdressTitle>
            <MapPinLine /> Endereço de entrega
          </AdressTitle>
          <Text>Informe o endereço onde deseja receber seu pedido</Text>
        </div>
        <form>
          <Input type="text" placeholder="CEP" />
          <Input type="text" placeholder="Rua" />
          <Input type="text" placeholder="Número" />
          <Input type="text" placeholder="Complemento" />
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </form>
      </AdressCard>
    </AdressContainer>
  )
}
