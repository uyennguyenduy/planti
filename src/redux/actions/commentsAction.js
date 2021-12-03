import { createAction } from "@reduxjs/toolkit";

export const getCommentsRequest = createAction('comments/getCommentsRequest');
export const getCommentsSuccess = createAction('comments/getCommentsSuccess');
export const getCommentsFailed = createAction('comments/getCommentsFailed');

export const addComment = createAction('comments/addComment');
export const addCommentSuccess = createAction('comments/addCommentSuccess');
export const addCommentFailed = createAction('comments/addCommentFailed');