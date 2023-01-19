import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Cart from './pages/Cart'
import Home from './pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="checkout/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default Router
