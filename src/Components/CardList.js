import React, {useEffect} from 'react';
import CardComponent from "./CardComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../firebase/firebaseAction";

const CardList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    const posts = useSelector((state) => state.posts.posts)
    return (
        <div className="card-list d-flex  flex-wrap justify-content-between">
            {posts.map((card, index) => (
                <CardComponent key={index} {...card}/>
            ))
            }
        </div>
    );
};

export default CardList;