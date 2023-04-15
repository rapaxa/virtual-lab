import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CardList from "../Components/CardList";
// import { useSelector } from 'react-redux'
// import {getPostsRequest,getPostsSuccess} from "../redux/firebaseData";


const Articles = () => {
    return (
        <div className='container-sm'>
            <CardList/>
        </div>
    );
}

export default Articles;