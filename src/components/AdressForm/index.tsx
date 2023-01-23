import { MapPinLine } from 'phosphor-react'
import React, { useContext } from 'react'
import { AdressContext } from '../../context/Adress/AdressContext'
import {
  AdressCard,
  AdressContainer,
  AdressTitle,
  Input,
  Text,
  Title,
} from './styles'

export const AdressForm = () => {
  const { adress, setAdress } = useContext(AdressContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAdress({ ...adress, [name]: value })
  }

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
          <Input
            type="text"
            name="zipCode"
            placeholder="CEP"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="street"
            placeholder="Rua"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="number"
            placeholder="Número"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="complement"
            placeholder="Complemento"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="district"
            placeholder="Bairro"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="city"
            placeholder="Cidade"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="state"
            placeholder="UF"
            onChange={handleChange}
          />
        </form>
      </AdressCard>
    </AdressContainer>
  )
}
