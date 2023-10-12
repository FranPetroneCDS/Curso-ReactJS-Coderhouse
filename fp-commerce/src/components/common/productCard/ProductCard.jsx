import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 350, height: 550, textAlign: 'center' }}>
      <CardMedia sx={{ height: 340 }} image={item.img} title={`image ${item.title}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="overline" color="text.green" fontSize={15} fontWeight={'bold'}>
          $ {item.price}
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
