import React, { createContext, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { Product } from '../Cart/cart.types'

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface Order {
  id: number
  adress: {}
  paymentMethod: {}
  items: Product[]
}

interface OrdersContextType {
  orders: Order[]
  newOrder: (data: Order) => Promise<void>
}

export const OrderContext = createContext({} as OrdersContextType)

export const OrderProvider = ({ children }: TransactionsProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([])

  const newOrder = async (data: Order) => {
    const response = await api.post('/order', data)
    if (response.status === 201) {
      toast.success('Solicitação concluída com sucesso!')
      setOrders([...orders, response.data])
    }
  }

  const loadOrder = useCallback(async () => {
    const response = await api.get('/order')
    setOrders(response.data)
  }, [])

  useEffect(() => {
    loadOrder()
  }, [loadOrder])

  return (
    <OrderContext.Provider value={{ orders, newOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
