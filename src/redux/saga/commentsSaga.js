import { put, call, takeLatest } from 'redux-saga/effects';
import { addDocument, getCollection } from '../../service/firestore';
import { addComment, addCommentFailed, addCommentSuccess, getCommentsFailed, getCommentsRequest, getCommentsSuccess } from '../actions/commentsAction';
import { commentAdded } from '../reducers/commentsSlice';

function* getCommentsSaga() {
  try {
    const querySnapshot = yield call(getCollection, "Comments");
      
      let comments = [];
      querySnapshot.forEach(doc => {
        comments.push({
          id: doc.id,
          ...doc.data()
        })
      })
    yield put(getCommentsSuccess(comments));

  } catch(error) {
    console.log(error);
    yield put(getCommentsFailed(error));
  }
}

function* addCommentSaga(action) {
  try {
    const { author, userId, postId, content } = action.payload;
    const doc = yield call(addDocument, "Comments",
      {
        author,
        userId,
        postId,
        content
      }
    )
   
  } catch(error) {
    console.log(error);  
  }
}
export function* watchComments() {
  yield takeLatest(getCommentsRequest().type, getCommentsSaga)
  yield takeLatest(addComment().type, addCommentSaga)
}