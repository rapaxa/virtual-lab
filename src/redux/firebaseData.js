import {createSlice} from "@reduxjs/toolkit";
import {fetchPosts} from "../firebase/firebaseAction";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, () => {
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})
export default postsSlice
export const {reducer} = postsSlice
