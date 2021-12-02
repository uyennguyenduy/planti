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

export const onPostReactionUpdate = (collection, doc) => {
  const postsRef = firestore().collection(collection).doc(doc);
  return firestore().runTransaction( async transaction => {
    const postSnapshot = await transaction.get(postsRef);
    if(!postSnapshot.exists) {
      throw 'Post does not exit!';
    }
    transaction.update(postsRef, {
      reaction: postSnapshot.data().reaction + 1
    })
  })
}

export const syncCollection = (collection) =>{
  const collectionRef = firestore().collection(collection);
  return firestore().runTransaction()
}