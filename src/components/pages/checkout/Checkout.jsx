import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { Button } from '@mui/material'
import Input from '@mui/material/Input'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import PaymentIcon from '@mui/icons-material/Payment'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    apellido: '',
    email: '',
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validaciones
    // Gestión de Errores
    console.log(userInfo)
  }

  return (
    <Card variant="outlined" sx={{ width: '60vw', height: 400, margin: 'auto', textAlign: 'center' }}>
      <Stack direction="column" spacing={2}>
        <CardContent>
          <PaymentIcon style={{ fontSize: 70 }} />
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            Checkout
          </Typography>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Stack direction="column" spacing={2} alignItems="center">
              <Input placeholder="Nombre" name="nombre" onChange={handleChange} />
              <Input placeholder="Apellido" name="apellido" onChange={handleChange} />
              <Input placeholder="Email" name="email" onChange={handleChange} />
              <Button variant="contained" type="submit" endIcon={<MonetizationOnIcon />}>
                Pagar
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default Checkout
