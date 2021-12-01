import { createAction } from "@reduxjs/toolkit";

export const getPostsRequest = createAction('posts/getPostsRequest');
export const getPostsSuccess = createAction('posts/getPostsSuccess');
export const getPostsFailed = createAction('posts/getPostsFailed');