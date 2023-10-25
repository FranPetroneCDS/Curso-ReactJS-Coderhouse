import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextComponent = ({children}) => {

  const [cart, addCart] = useState([])

  const addToCart = (product) => {
    let exist = isInCart(product.id)

    if(exist){

    }else{
      
    }
  }

  const isInCart = (id) => {
    let exist = cart.some(element => element.id === id)
    return exist
  }

  return <CartContext.Provider value={data}>{children}<CartContext.Provider/>
}

export default CartContextComponent
