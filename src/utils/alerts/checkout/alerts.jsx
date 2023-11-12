import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Typography from '@mui/material/Typography'

export const alertNotStock = () => {
  return withReactContent(Swal).fire({
    title: (
      <Typography variant="h4" component="p">
        Stock Insuficiente
      </Typography>
    ),
    html: (
      <Typography variant="body1" component="p">
        No se pudo generar la orden. <br />
        No hay suficiente stock de producto/s.
      </Typography>
    ),
    icon: 'error',
    confirmButtonText: 'Aceptar',
  })
}

export const alertOrderOk = (orderId) => {
  return withReactContent(Swal).fire({
    title: (
      <Typography variant="h4" component="p">
        Orden Generada
      </Typography>
    ),
    html: (
      <Typography variant="body1" component="p">
        La orden de compra fue generada correctamente.
        <br />
        ID Orden: <b>{orderId}</b>
      </Typography>
    ),
    icon: 'success',
    confirmButtonText: 'Aceptar',
  })
}

export const alertOrderError = () => {
  return withReactContent(Swal).fire({
    title: (
      <Typography variant="h4" component="p">
        Error al Generar Orden
      </Typography>
    ),
    html: (
      <Typography variant="body1" component="p">
        No se pudo generar la orden. <br /> Intente más tarde.
      </Typography>
    ),
    icon: 'error',
    confirmButtonText: 'Aceptar',
  })
}
