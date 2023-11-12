import { fbDB } from '../../firebaseConfig'
import { collection, updateDoc, getDocs, getDoc, addDoc, doc, where, query } from 'firebase/firestore'

export const updateDocById = (collectionName, idDoc, docData) => {
  const item = doc(fbDB, collectionName, idDoc)
  return new Promise((res, rej) =>
    updateDoc(item, docData)
      .then((upRes) => {
        res(upRes)
      })
      .catch(() => {
        //console.log(`Error al actualizar documento en la colección '${collectionName}'.`)
        rej(null)
      })
  )
}

export const addNewDoc = (collectionName, docData) => {
  const itemsCollection = collection(fbDB, collectionName)
  return new Promise((res, rej) =>
    addDoc(itemsCollection, docData)
      .then((adRes) => {
        res(adRes.id)
      })
      .catch(() => {
        //console.log(`Error al guardar documento en la colección '${collectionName}'.`)
        rej(null)
      })
  )
}

export const getAllDocs = (collectionName) => {
  const itemsCollection = collection(fbDB, collectionName)
  return new Promise((res, rej) =>
    getDocs(itemsCollection)
      .then((gdRes) => {
        const arr = gdRes.docs.map((item) => {
          return { id: item.id, ...item.data() }
        })
        res(arr)
      })
      .catch(() => {
        //console.log(`Error al obtener datos de la colección '${collectionName}'.`)
        rej([])
      })
  )
}

export const getAllDocsWithCondition = (collectionName, condition) => {
  const itemsCollection = collection(fbDB, collectionName)
  const collectionFiltered = query(itemsCollection, where(condition.field, condition.case, condition.value))
  return new Promise((res, rej) =>
    getDocs(collectionFiltered)
      .then((gdRes) => {
        const arr = gdRes.docs.map((item) => {
          return { id: item.id, ...item.data() }
        })
        res(arr)
      })
      .catch(() => {
        //console.log(`Error al obtener datos de la colección '${collectionName}' con una condición dada.`)
        rej([])
      })
  )
}

export const getDocById = (collectionName, idDoc) => {
  const itemsCollection = collection(fbDB, collectionName)
  const refDoc = doc(itemsCollection, idDoc)
  return new Promise((res, rej) =>
    getDoc(refDoc)
      .then((gdRes) => {
        res({ id: gdRes.id, ...gdRes.data() })
      })
      .catch(() => {
        //console.log(`Error al obtener datos del documento '${idDoc}' en la colección '${collectionName}'.`)
        rej({})
      })
  )
}
