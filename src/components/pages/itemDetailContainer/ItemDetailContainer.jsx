import { useEffect, useState, useContext } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../../common/loader/Loader'
import { CartContext } from '../../../context/CartContext'
import { getProductById } from '../../../utils/firebase/models/product'
import { alertAddCart, alertStockLimit } from '../../../utils/alerts/itemDetail/alerts'

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext)

  const [productSelected, setProductSelected] = useState({})

  const { id } = useParams()
  const totalQuantity = getQuantityById(id)

  useEffect(() => {
    getProductById(id).then((res) => setProductSelected(res))
  }, [id])

  const onAdd = (cantidad) => {
    let product = {
      ...productSelected,
      quantity: cantidad,
    }
    if (!totalQuantity || totalQuantity + product.quantity <= product.stock) {
      addToCart(product)
      alertAddCart(product)
    } else {
      alertStockLimit()
    }
  }

  return productSelected.id ? (
    <ItemDetail productSelected={productSelected} onAdd={onAdd} initial={totalQuantity} />
  ) : (
    <Loader />
  )
}

export default ItemDetailContainer
