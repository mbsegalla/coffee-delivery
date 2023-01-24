import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Success from './pages/Success'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="checkout/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}

export default Router
