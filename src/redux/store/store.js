import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from '../reducers/authSlice';
import postsReducer from '../reducers/postsSlice';
import commentsReducer from '../reducers/commentsSlice';
import plantsReducer from '../reducers/plantsSlice';
import searchTermReducer from '../reducers/searchTermSlice';
import sortsReducer from '../reducers/sortsSlice';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
    plants: plantsReducer,
    searchTerms: searchTermReducer,
    sortTerms: sortsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)