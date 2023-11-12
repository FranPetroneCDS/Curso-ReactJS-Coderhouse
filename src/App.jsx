import Cart from './components/pages/cart/Cart'
import Layout from './components/layout/Layout'
import { customTheme } from './themeConfig'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/pages/itemDetailContainer/ItemDetailContainer'
import NotFoundContainer from './components/pages/notFoundContainer/NotFoundContainer'
import Checkout from './components/pages/checkout/Checkout'
import CartContextComponent from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CartContextComponent>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryName" element={<ItemListContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<NotFoundContainer />} />
            </Route>
          </Routes>
        </CartContextComponent>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
