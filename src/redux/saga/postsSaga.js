import { put, takeLatest, call } from 'redux-saga/effects';
import { getCollection } from "../../service/firestore";
import { getPostsFailed, getPostsRequest, getPostsSuccess } from '../actions/postsActions';


function* getPostsSaga() {
  try {
    const querySnapshot = yield call(getCollection, "Posts");
    console.log(querySnapshot.size);
    let posts = [];
    querySnapshot.forEach(doc => {
      posts.push({
        id: doc.id,
        ...doc.data()
      })
    })

    yield put(getPostsSuccess(posts))

  } catch (error) {

    console.log(error);
    yield put(getPostsFailed(error))
  }
}

export function* watchPosts() {
  yield takeLatest(getPostsRequest().type, getPostsSaga)
}