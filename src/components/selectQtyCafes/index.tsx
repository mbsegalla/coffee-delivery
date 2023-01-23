import { Minus, Plus } from 'phosphor-react'
import { Product } from '../../context/Cart/cart.types'
import { Button, Container } from './styles'

interface SelectQtyCafesProps {
  size: string
  coffee: Product
  handleDecrement: (coffe: Product) => void
  handleAddToCart: (coffe: Product) => void
  qtyInCart: (coffe: Product) => number
}

const SelectQtyCafes = ({
  size,
  coffee,
  handleDecrement,
  handleAddToCart,
  qtyInCart,
}: SelectQtyCafesProps) => {
  return (
    <Container size={size}>
      <Button onClick={() => handleDecrement(coffee)}>
        <Minus weight="fill" />
      </Button>
      <span>{qtyInCart(coffee)}</span>
      <Button onClick={() => handleAddToCart(coffee)}>
        <Plus weight="fill" />
      </Button>
    </Container>
  )
}

export default SelectQtyCafes
