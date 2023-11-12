import ItemList from './ItemList'
import Loader from '../../common/loader/Loader'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../../utils/firebase/models/product'

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const { categoryName } = useParams()

  useEffect(() => {
    const productsFB = categoryName ? getProductsByCategory(categoryName) : getProducts()
    productsFB.then((products) => {
      const filteredProducts = products.filter((product) => product.stock > 0)
      setItems(filteredProducts)
    })
  }, [categoryName])

  return items.length === 0 ? <Loader /> : <ItemList items={items} />
}

export default ItemListContainer
