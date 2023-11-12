import { serverTimestamp } from 'firebase/firestore'
import { addNewDoc, getDocById } from '../firebase'

export const getServerTimestamp = () => {
  return serverTimestamp()
}

export const addOrder = (order) => {
  return addNewDoc('orders', order)
}

export const getOrderById = (id) => {
  return getDocById('orders', id)
}
