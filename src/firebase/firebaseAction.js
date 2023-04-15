import {createAsyncThunk} from "@reduxjs/toolkit";
import {onValue, ref} from "firebase/database";
import {db} from "./firebase";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const reference = ref(db)
    return new Promise((resolve, reject) => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val()
            const posts = [];
            for (let key in data) {
                posts.push({id: key, ...data[key]});
            }
            resolve(posts);
        }, (error) => {
            reject(error)
        })
    })
})