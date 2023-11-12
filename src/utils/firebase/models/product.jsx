import { updateDocById, addNewDoc, getAllDocs, getDocById, getAllDocsWithCondition } from '../firebase'

export const addProduct = (product) => {
  return addNewDoc('products', product)
}

export const updateProduct = (id, data) => {
  return updateDocById('products', id, data)
}

export const getProducts = () => {
  return getAllDocs('products')
}

export const getProductsByCategory = (category) => {
  return getAllDocsWithCondition('products', { field: 'category', case: '==', value: category })
}

export const getProductById = (id) => {
  return getDocById('products', id)
}

export const checkStock = (cart) => {
  return new Promise((res) =>
    getProducts().then((products) => {
      let outOfStock = []
      products.forEach((product) => {
        const productInCart = cart.find((productInCart) => productInCart.id === product.id)
        if (productInCart && product.stock < productInCart.quantity) {
          outOfStock.push(productInCart)
        }
      })
      res(outOfStock)
    })
  )
}

export const updateProductsStock = (cart) => {
  return new Promise((res) => {
    cart.forEach((productInCart) => {
      getProductById(productInCart.id).then((product) => {
        updateProduct(product.id, { stock: product.stock - productInCart.quantity })
      })
    })
    return res('OK')
  })
}
