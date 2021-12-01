import { createSlice } from '@reduxjs/toolkit';
import { POSTS } from '../../assets/data/POSTS';
import { getPostsFailed, getPostsRequest, getPostsSuccess } from '../actions/postsActions';

const initialPosts = {
  allPosts: [],
  isLoading: true,
  hasError: null
}

const postsSlice = createSlice({
  name:'posts',
  initialState: initialPosts,
  reducers: {
    reactionAdded(state, action) {
      const { postId } = action.payload;
      const existingPost = state.allPosts.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reaction++;
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPostsRequest, (state, action) => {
      return {
        isLoading: true
      }
    })
    .addCase(getPostsSuccess, (state, action) => {
      const allPosts = action.payload;

      return {
        allPosts,
        isLoading: false,
        hasError: null
      }
    })
    .addCase(getPostsFailed, (state, action) => {
      return {
        isLoading: false,
        hasError: action.payload
      }
    })
  }
})



// export const selectAllPosts = state => {
//   if (!state.post.isLoading) {
//     return state.post.allPosts;
//   }
// };

export const selectAllPosts = state => {
  const { isLoading } = state => state.posts;
  if (!isLoading) {
    return state.posts.allPosts;
  }
  return null;
}
export const selectPlantCarePosts = state => {
  const allPosts = selectAllPosts(state);
  if (allPosts)
  return allPosts.filter((post) => post.label === 'Plant Care')
 
}

export const selectLivingWithPlantsPosts = state => {
  const allPosts = selectAllPosts(state);
  if (allPosts)
  return allPosts.filter((post) => post.label === 'Living With Plants')
}


export const { reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;