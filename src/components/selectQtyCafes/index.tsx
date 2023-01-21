import { Minus, Plus } from 'phosphor-react'
import { Product } from '../../context/Cart/cart.types'
import { Button, Container } from './styles'

interface SelectQtyCafesProps {
  size: string
  coffe: Product
  handleDecrement: (coffe: Product) => void
  handleAddToCart: (coffe: Product) => void
  qtyInCart: (coffe: Product) => number
}

const SelectQtyCafes = ({
  size,
  coffe,
  handleDecrement,
  handleAddToCart,
  qtyInCart,
}: SelectQtyCafesProps) => {
  return (
    <Container size={size}>
      <Button onClick={() => handleDecrement(coffe)}>
        <Minus weight="fill" />
      </Button>
      <span>{qtyInCart(coffe)}</span>
      <Button onClick={() => handleAddToCart(coffe)}>
        <Plus weight="fill" />
      </Button>
    </Container>
  )
}

export default SelectQtyCafes
