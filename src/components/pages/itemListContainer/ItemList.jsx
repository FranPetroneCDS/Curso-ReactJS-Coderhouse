import ProductCard from '../../common/productCard/ProductCard'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const ItemList = ({ items }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ margin: 'auto', paddingInline: '10vw' }}
      >
        {items.map((item, index) => {
          return (
            <Grid item xs={2} sm={4} md={3} key={index} textAlign={'-webkit'}>
              <ProductCard key={item.id} item={item} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ItemList
