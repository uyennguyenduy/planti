import firestore from "@react-native-firebase/firestore"
import { put, takeLatest, call, take} from 'redux-saga/effects';
import { onPostReactionUpdate, subcribeToCollection } from "../../service/firestore";
import { getPostsRequest, getPostsSuccess } from '../actions/postsActions';
import { reactionAdded } from '../reducers/postsSlice';
import { END, eventChannel } from '@redux-saga/core';



function* getPostsSaga() {
  const channel = yield call(subcribeToCollection, "Posts");
  try {
    while (true) {
      const posts = yield take(channel);
      yield put(getPostsSuccess(posts))
    }
  } finally {
    // if (yield cancelled()) {
    //   channel.close();
    // }
    console.log("subscribeToCollection is terminated")
  }
}

// function* getPosts() {
//   try {
//     const querySnapshot = yield call(getCollection, "Posts");
//     // console.log(collection.length)
//     let posts = [];
    
//     querySnapshot.forEach(doc => {
// //       posts.push({
// //         id: doc.id,
// //         ...doc.data()
// //       })
// //     })
  
//     yield put(getPostsSuccess(posts))

//   } catch (error) {

//     console.log(error);
//     yield put(getPostsFailed(error))
//   }
// }

function* addPostReactionSaga(action) {
  try {
    const { postId } = action.payload;
    yield call(onPostReactionUpdate, "Posts", postId)
  } catch(error) {
    console.log(error)
  }
}
export function* watchPosts() {
  yield takeLatest(getPostsRequest().type, getPostsSaga)
  yield takeLatest(reactionAdded().type, addPostReactionSaga)
 
}