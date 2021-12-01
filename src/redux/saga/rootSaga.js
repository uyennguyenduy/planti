import { all } from 'redux-saga/effects';
import { watchAuth } from './authSaga';
import { watchPosts } from './postsSaga';
import { watchPlants } from './plantsSaga';

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchPosts(),
    watchPlants()
  ])
}