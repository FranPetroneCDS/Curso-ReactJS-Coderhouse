import { RiseLoader } from 'react-spinners'
import Box from '@mui/material/Box'

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: 300 }}>
      <RiseLoader color="#0078d2" />
    </Box>
  )
}

export default Loader
