import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
// Material UI
import Card from '@mui/material/Card'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'

const Cart = () => {
  const { cart, getTotalPrice, clearCart, deleteProductById } = useContext(CartContext)

  const totalPrice = getTotalPrice()

  const priceARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  return (
    <Card variant="outlined" sx={{ width: '60vw', margin: 'auto', textAlign: 'center', paddingInline: 10 }}>
      <Grid item xs={12} md={6}>
        <CardContent>
          <ShoppingCartIcon style={{ fontSize: 70 }} />
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            Carrito
          </Typography>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 20 }}>
            {totalPrice == 0 ? (
              <>
                <p>Sin Productos</p>
                <Link to={`/`}>
                  <Button>Comprar Ahora</Button>
                </Link>
              </>
            ) : (
              `Total 🧾 ${priceARS.format(totalPrice)}`
            )}
          </Typography>

          <List dense={false}>
            {cart.map((product, key) => {
              return (
                <ListItem
                  key={key}
                  sx={{ borderBottom: '1px solid gray', backgroundColor: '#f6f9ff' }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteProductById(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar sx={{ marginRight: 2 }}>
                    <Avatar src={product.img} alt={product.title} sx={{ width: 70, height: 70 }} />
                  </ListItemAvatar>
                  <Link to={`../itemDetail/${product.id}`}>
                    {product.quantity > 1 ? (
                      <ListItemText
                        primary={
                          <Typography fontWeight={'bold'}>
                            x{product.quantity} • {product.title}
                          </Typography>
                        }
                        secondary={`${priceARS.format(product.price * product.quantity)} • ${priceARS.format(
                          product.price
                        )} c/u`}
                      />
                    ) : (
                      <ListItemText
                        primary={
                          <Typography fontWeight={'bold'}>
                            x{product.quantity} • {product.title}
                          </Typography>
                        }
                        secondary={`${priceARS.format(product.price)}`}
                      />
                    )}
                  </Link>
                </ListItem>
              )
            })}
          </List>

          {totalPrice > 0 && (
            <>
              <Link to={`../checkout`}>
                <Button>Finalizar Compra</Button>
              </Link>
              <Button onClick={clearCart}>Vaciar Carrito</Button>
            </>
          )}
        </CardContent>
      </Grid>
    </Card>
  )
}

export default Cart
