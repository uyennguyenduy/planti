import { put, takeLatest, call, take, actionChannel } from 'redux-saga/effects';
import { getCollection, onPostReactionUpdate } from "../../service/firestore";
import { getPostsFailed, getPostsRequest, getPostsSuccess } from '../actions/postsActions';
import { reactionAdded } from '../reducers/postsSlice';


function* getPostsSaga() {
  try {
    const querySnapshot = yield call(getCollection, "Posts");
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