import { createContext, useState } from 'react'

interface PaymentMethodContextType {
  paymentMethod: string
  setPaymentMethod: (paymentMethod: string) => void
}

export const PaymentMethodContext = createContext(
  {} as PaymentMethodContextType,
)

export const PaymentMethodProvider = ({ children }: any) => {
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <PaymentMethodContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </PaymentMethodContext.Provider>
  )
}
