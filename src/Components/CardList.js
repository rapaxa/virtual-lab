import React, {useState, useEffect} from 'react';
import {ref, onValue,} from "firebase/database";
import {db} from "../firebase";
import CardComponent from "./CardComponent";

const CardList = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const reference = ref(db);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            const posts = [];
            for (let key in data) {
                posts.push({id: key, ...data[key]});

            }
            setCards(posts);
        });

    }, []);

    return (
        <div className="card-list d-flex  flex-wrap justify-content-between">
            {cards.map((card, index) => (
                <CardComponent key={index} {...card}/>
            ))
            }
        </div>
    );
};

export default CardList;