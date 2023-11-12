import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const priceARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  return (
    <Card variant="outlined" sx={{ minWidth: 260, maxWidth: 400, height: 550, textAlign: 'center' }}>
      <CardMedia sx={{ height: 340 }} image={item.img} title={`image ${item.title}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="overline" color="text.green" fontSize={15} fontWeight={'bold'}>
          {priceARS.format(item.price)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" color="primary">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard
