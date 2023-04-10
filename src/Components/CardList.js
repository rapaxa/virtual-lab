import React, { useState, useEffect } from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import CardComponent from "./CardComponent";

const CardList = () => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        const todosRef = collection(db, "posts");
        getDocs(todosRef).then((querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({id: doc.id, ...doc.data()});
            });
            setCards(posts);

        });

    }, []);

    return (
        <div className="card-list d-flex justify-content-between">
            {cards.map((card, index) => (
                <CardComponent key={index} {...card} />

            ))}
        </div>
    );
};

export default CardList;