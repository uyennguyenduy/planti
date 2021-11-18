import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../reducers/usersSlice';
import postsReducer from '../reducers/postsSlice';
import commentsReducer from '../reducers/commentsSlice';
import plantsReducer from '../reducers/plantsSlice';
import searchTermReducer from '../reducers/searchTermSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    plants: plantsReducer,
    searchTerms: searchTermReducer
  }
})