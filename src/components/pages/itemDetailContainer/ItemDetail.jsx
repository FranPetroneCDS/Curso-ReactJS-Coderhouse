import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CounterContainer from '../../common/counter/CounterContainer'

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
  const priceARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  return (
    <Card variant="outlined" sx={{ width: '60vw', height: 500, margin: 'auto' }}>
      <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'center'}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            {productSelected.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {productSelected.description}
          </Typography>
          <Typography variant="overline" color="text.secondary" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            {priceARS.format(productSelected.price)}
          </Typography>
          <div>
            <CounterContainer stock={productSelected.stock} onAdd={onAdd} initial={initial} />
          </div>
          <div>
            {initial > 0 && (
              <Link to={`../checkout`}>
                <Button>Finalizar Compra</Button>
              </Link>
            )}
          </div>
        </CardContent>
        {productSelected.img && (
          <CardMedia sx={{ width: 450, height: 450 }} image={productSelected.img} title="Producto" />
        )}
      </Stack>
    </Card>
  )
}
