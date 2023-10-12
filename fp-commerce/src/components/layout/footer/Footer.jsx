import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#1976d2',
        height: '15vh',
        textAlign: 'center',
        paddingTop: 35,
      }}
    >
      <Typography color={'white'} variant="subtitle1" fontWeight={'bold'}>
        &copy; 2023 FP Commerce
      </Typography>
    </div>
  )
}

export default Footer
