import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Cart = () => {
  return (
    <Card variant="outlined" sx={{ width: '60vw', height: 200, margin: 'auto', textAlign: 'center' }}>
      <Stack direction="column" spacing={2}>
        <CardContent>
          <ShoppingCartIcon style={{ fontSize: 70 }} />
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            Carrito
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default Cart
