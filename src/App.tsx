import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import CartProvider from './contexts/Cart/CartContext'
import Router from './Router'
import { GlobalStyles } from './styles/globalStyles'
import theme from './styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AdressProvider } from './contexts/Adress/AdressContext'
import { PaymentMethodProvider } from './contexts/PaymentMethod/PaymentMethodContext'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <BrowserRouter>
        <CartProvider>
          <PaymentMethodProvider>
            <AdressProvider>
              <Router />
            </AdressProvider>
          </PaymentMethodProvider>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
