import { getAllDocs } from '../firebase'

export const getCategories = () => {
  return getAllDocs('categories')
}
