import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CounterContainer from '../../common/counter/CounterContainer'
import Stack from '@mui/material/Stack'

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Card variant="outlined" sx={{ width: '60vw', height: 500, margin: 'auto' }}>
      <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'flex-end'}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            {productSelected.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {productSelected.description}
          </Typography>
          <Typography variant="overline" color="text.secondary" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            $ {productSelected.price}
          </Typography>
          <div>
            <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
          </div>
        </CardContent>
        <CardMedia sx={{ width: 450, height: 450 }} image={productSelected.img} title="Producto" />
      </Stack>
    </Card>
  )
}
