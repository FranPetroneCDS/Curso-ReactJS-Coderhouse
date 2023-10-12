import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export const NotFound = () => {
  return (
    <Card variant="outlined" sx={{ width: '60vw', height: 200, margin: 'auto', textAlign: 'center' }}>
      <Stack direction="column" spacing={2}>
        <CardContent>
          <ErrorOutlineIcon style={{ fontSize: 70 }} />
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: 30 }}>
            404 Not Found
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            No se encontró la página.
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  )
}
