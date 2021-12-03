import { all, fork } from 'redux-saga/effects';
import { watchAuth } from './authSaga';
import { watchPosts } from './postsSaga';
import { watchPlants } from './plantsSaga';
import { watchComments } from './commentsSaga';

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchPosts),
    fork(watchPlants),
    fork(watchComments)
  ])
}