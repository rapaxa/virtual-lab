import {configureStore} from '@reduxjs/toolkit'
import {reducer} from "./firebaseData";

export const store = configureStore({
    reducer: {
        posts: reducer,
    },
});

export default store
