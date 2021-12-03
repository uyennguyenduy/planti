import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { COMMENTS } from "../../assets/data/COMMENTS";
import { addComment, addCommentFailed, addCommentSuccess, getCommentsFailed, getCommentsRequest, getCommentsSuccess } from "../actions/commentsAction";

const initialState = {
  allComments: [],
  isLoading: true,
  hasError: null
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
    .addCase(getCommentsRequest, (state, action) => {
      return {
        isLoading: true
      }
    })
    .addCase(getCommentsSuccess, (state, action) => {
      const allComments = action.payload;

      return {
        allComments,
        isLoading: false,
        hasError: null
      }
    })
    .addCase(getCommentsFailed, (state, action) => {
      return {
        isLoading: false,
        hasError: action.payload
      }
    })

    .addCase(addComment, (state, action) => {
      console.log(action.payload)
      state.allComments.push(action.payload);
    })
    // .addCase(addCommentSuccess, (state, action) => {
    //   return {
    //     isLoading: false
    //   }
    // })
    
  }
})

export const selectAllComments = state => {
  const { isLoading } = state.comments;
  if (!isLoading) {
    return state.comments.allComments;
  }

};



export default commentsSlice.reducer;