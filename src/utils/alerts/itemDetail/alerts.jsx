import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Typography from '@mui/material/Typography'

export const alertStockLimit = () => {
  return withReactContent(Swal).fire({
    title: (
      <Typography variant="h4" component="p">
        Límite de Stock
      </Typography>
    ),
    html: (
      <Typography variant="body1" component="p">
        No hay más stock disponible.
      </Typography>
    ),
    icon: 'warning',
    confirmButtonText: 'Aceptar',
  })
}

export const alertAddCart = (product) => {
  return withReactContent(Swal).fire({
    title: (
      <Typography variant="h4" component="p">
        Agregado al Carrito
      </Typography>
    ),
    html: (
      <Typography variant="body1" component="p">
        Se agregó {product.title} (x{product.quantity})
      </Typography>
    ),
    icon: 'success',
    confirmButtonText: 'Aceptar',
  })
}
