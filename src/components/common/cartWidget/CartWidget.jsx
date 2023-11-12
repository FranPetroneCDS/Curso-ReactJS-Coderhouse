import { useContext } from 'react'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext)

  const totalQuantity = getTotalQuantity()

  return (
    <Link to="/cart">
      <Badge badgeContent={totalQuantity} showZero color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  )
}

export default CartWidget
