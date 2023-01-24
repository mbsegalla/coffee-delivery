import React, { useState } from 'react'

interface AdressProviderProps {
  children: React.ReactNode
}

interface Adress {
  zipCode: string
  street: string
  complement: string
  number: string
  district: string
  city: string
  state: string
}

interface AdressContextType {
  adress: Adress
  setAdress: (adress: Adress) => void
}

export const AdressContext = React.createContext({} as AdressContextType)

export const AdressProvider = ({ children }: AdressProviderProps) => {
  const [adress, setAdress] = useState<Adress>({
    zipCode: '',
    street: '',
    complement: '',
    number: '',
    district: '',
    city: '',
    state: '',
  })

  return (
    <AdressContext.Provider value={{ adress, setAdress }}>
      {children}
    </AdressContext.Provider>
  )
}
