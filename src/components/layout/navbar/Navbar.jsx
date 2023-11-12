import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../../common/cartWidget/CartWidget'
import { CartContext } from '../../../context/CartContext'
import { getCategories } from '../../../utils/firebase/models/category'
import './Navbar.css'
// Material UI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [categories, setCategories] = useState([])

  const { getTotalQuantity } = useContext(CartContext)

  const totalQuantity = getTotalQuantity()

  useEffect(() => {
    getCategories().then((categories) => {
      const arrSorted = categories.sort((cat1, cat2) => cat1.order - cat2.order)
      setCategories(arrSorted)
    })
  }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'lightblue',
                textDecoration: 'none',
              }}
            >
              FP Commerce
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {categories.length > 0 &&
                categories.map((category, key) => (
                  <Link key={key} to={category.path}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{category.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'lightblue',
                textDecoration: 'none',
              }}
            >
              FP Commerce
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', paddingRight: 25 }}>
            {categories.length > 0 &&
              categories.map((category, key) => (
                <Link key={key} to={category.path}>
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {category.title}
                  </Button>
                </Link>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>{totalQuantity > 0 && <CartWidget />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
