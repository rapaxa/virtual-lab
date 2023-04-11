import React, {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../firebase";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useLocation} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleDetails = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const title = query.get("title");
    const [post, setPost] = useState([]);
    const filteredPost = post.filter((p) => p.title === title);

    useEffect(() => {
        const reference = ref(db);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            const posts = [];
            for (let key in data) {
                posts.push({id: key, ...data[key]});
            }
            setPost(posts); // Здесь мы исправляем ошибку: вместо setPost(...posts) должно быть setPost(posts)
        });
    }, []);


            return (
                <>
                    {filteredPost.map((filteredPost, index) => (
                        <Col key={index} className="d-flex w-100">
                            <Card className="justify-content-center w-75 h-100">
                                <Card.Img variant="top" src={filteredPost.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{filteredPost.title}</Card.Title>
                                    <Card.Text>{filteredPost.description}</Card.Text>
                                    <hr />
                                    <Card.Title className="my-3">Analysts Comment</Card.Title>
                                    <Card.Text className="font-italic">{filteredPost.expertComment}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </>
            );
    };

export default ArticleDetails;
