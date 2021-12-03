import firestore from "@react-native-firebase/firestore"
import { END, eventChannel } from '@redux-saga/core';

export function subcribeToCollection(pathOrRef) {
  return eventChannel(emitter => {

    const subscribe = firestore().collection(pathOrRef).onSnapshot(querySnapshot => {
    let  collection = [];
    querySnapshot.forEach(doc => {
      collection.push({
        id: doc.id,
        ...doc.data()
      })
    })
      if (collection.length !== 0) {
        emitter(collection)
      } 
    })
    return () => subscribe
  })
}

export const getCollection = (collection) => {
  return firestore().collection(collection).get();
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