import { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CartContext } from '../../../context/CartContext'
import { alertNotStock, alertOrderOk, alertOrderError } from '../../../utils/alerts/checkout/alerts'
// Material UI
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { Button, TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import PaymentIcon from '@mui/icons-material/Payment'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import { checkStock, updateProductsStock } from '../../../utils/firebase/models/product'
import { addOrder, getServerTimestamp } from '../../../utils/firebase/models/order'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const { cart, getTotalPrice, getOrderData, clearCart } = useContext(CartContext)

  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()

  const total = getTotalPrice()
  const items = getOrderData()

  const priceARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  useEffect(() => {
    if (!cart.length) navigate('/')
  }, [navigate, cart])

  const { handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre requerido').max(100, 'Nombre muy largo'),
      phone: Yup.string().required('Teléfono requerido').max(100, 'Teléfono muy largo'),
      email: Yup.string().required('Email requerido').email('Email inválido').max(200, 'Email muy largo'),
    }),
    onSubmit: (data) => {
      setLoader(true)
      const newData = {
        buyer: data,
        items,
        date: getServerTimestamp(),
        total,
      }
      checkStock(cart).then((outOfStock) => {
        if (outOfStock.length) {
          alertNotStock()
          setLoader(false)
        } else {
          updateProductsStock(cart).then(() => {
            addOrder(newData)
              .then((id) => {
                clearCart()
                resetForm()
                alertOrderOk(id)
                setLoader(false)
              })
              .catch(() => {
                alertOrderError()
                setLoader(false)
              })
          })
        }
      })
    },
  })

  return (
    <Card variant="outlined" sx={{ width: '60vw', height: 550, margin: 'auto', textAlign: 'center' }}>
      <Stack direction="column" spacing={2}>
        <CardContent>
          <PaymentIcon style={{ fontSize: 70 }} />
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            Checkout
          </Typography>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 20 }}>
            {`Total 🧾 ${priceARS.format(total)}`}
          </Typography>

          <Box component="form" autoComplete="off" onSubmit={handleSubmit} noValidate>
            <Stack direction="column" spacing={2} alignItems="center">
              <TextField
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
                helperText={errors.name}
                size="small"
              />
              <TextField
                placeholder="Teléfono"
                name="phone"
                onChange={handleChange}
                helperText={errors.phone}
                size="small"
              />
              <TextField
                placeholder="Email"
                name="email"
                onChange={handleChange}
                helperText={errors.email}
                size="small"
              />
              {loader ? (
                <Button variant="contained" type="submit" disabled={true}>
                  Procesando...
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<MonetizationOnIcon />}
                  disabled={cart.length ? false : true}
                >
                  Generar Orden
                </Button>
              )}
            </Stack>
          </Box>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default Checkout
