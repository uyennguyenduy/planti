import firestore from "@react-native-firebase/firestore"

export const getCollection = (collection) => {
  return firestore().collection(collection).get()
}

export const getDocument = (collection, doc) => {
  return firestore().collection(collection).doc(doc).get()
}

export const addDocument = (collection, doc) => {
  return firestore().collection(collection).add(doc)
}
