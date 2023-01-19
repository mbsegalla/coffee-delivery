import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import CartProvider from './context/Cart/CartContext'
import Router from './Router'
import { GlobalStyles } from './styles/globalStyles'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
