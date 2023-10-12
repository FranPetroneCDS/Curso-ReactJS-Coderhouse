import IconButton from '@mui/material/IconButton'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <IconButton aria-label="Agregar" onClick={sumar}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Typography variant="h5" component="p">
        {contador}
      </Typography>
      <IconButton aria-label="Eliminar" onClick={restar}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <IconButton aria-label="Agregar al carrito" onClick={() => onAdd(contador)}>
        <AddShoppingCartIcon />
      </IconButton>
    </ButtonGroup>
  )
}

export default CounterPresentacional
