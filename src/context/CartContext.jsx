import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  // Actualizar Cart y LocalStorage

  const updateCart = (newArr) => {
    setCart(newArr)
    localStorage.setItem('cart', JSON.stringify(newArr))
  }

  // Agregar un producto al carrito

  const addToCart = (product) => {
    const productExist = isInCart(product.id)

    if (productExist) {
      const newArr = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...productInCart, quantity: productInCart.quantity + product.quantity }
        } else {
          return productInCart
        }
      })
      updateCart(newArr)
    } else {
      const newArr = [...cart, product]
      updateCart(newArr)
    }
  }

  // Comprobar si un producto se encuentra en el carrito

  const isInCart = (id) => {
    const exist = cart.some((productInCart) => productInCart.id === id)
    return exist
  }

  // Obtener la cantidad total de un producto en el carrito

  const getQuantityById = (id) => {
    const product = cart.find((productInCart) => productInCart.id === id)
    return product?.quantity
  }

  // Eliminar un producto del carrito

  const deleteProductById = (id) => {
    const newArr = cart.filter((productInCart) => productInCart.id !== id)
    updateCart(newArr)
  }

  // Obtener el valor total de todos los productos en el carrito

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, productInCart) => {
      return acc + productInCart.price * productInCart.quantity
    }, 0)
    return totalPrice
  }

  // Obtener la cantidad total de productos

  const getTotalQuantity = () => {
    const totalQuantity = cart.reduce((acc, productInCart) => {
      return acc + productInCart.quantity
    }, 0)
    return totalQuantity
  }

  // Generar Datos de Orden

  const getOrderData = () => {
    const items = cart.map((productInCart) => {
      const { id, title, quantity, price } = productInCart
      return { id, title, quantity, price }
    })
    return items
  }

  // Eliminar todos los productos del carrito

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  // Funciones a exportar

  const data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
    getOrderData,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextComponent
