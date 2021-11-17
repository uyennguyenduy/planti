import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../reducers/usersSlice';
import postsReducer from '../reducers/postsSlice';
import commentsReducer from '../reducers/commentsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})