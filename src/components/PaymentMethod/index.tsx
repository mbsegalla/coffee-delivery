import React, { useContext } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodContext } from '../../context/PaymentMethod/PaymentMethodContext'
import {
  PaymentMethodBase,
  PaymentMethodButton,
  PaymentMethodCard,
  Text,
  Title,
} from './styles'

const PaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useContext(PaymentMethodContext)

  const handlePaymentMethod = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget
    setPaymentMethod(value)
  }

  return (
    <PaymentMethodCard>
      <Title>
        <CurrencyDollar /> Pagamento
      </Title>
      <Text>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </Text>
      <PaymentMethodBase>
        <PaymentMethodButton
          isSelected={paymentMethod === 'credit-card'}
          value="credit-card"
          onClick={handlePaymentMethod}
        >
          <CreditCard />
          cartão de cŕedito
        </PaymentMethodButton>
        <PaymentMethodButton
          isSelected={paymentMethod === 'debit-card'}
          value="debit-card"
          onClick={handlePaymentMethod}
        >
          <Bank />
          cartão de débito
        </PaymentMethodButton>
        <PaymentMethodButton
          isSelected={paymentMethod === 'money'}
          value="money"
          onClick={handlePaymentMethod}
        >
          <Money />
          dinheiro
        </PaymentMethodButton>
      </PaymentMethodBase>
    </PaymentMethodCard>
  )
}

export default PaymentMethod
