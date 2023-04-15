import React, {useEffect} from "react";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useLocation} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../firebase/firebaseAction";

const ArticleDetails = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idKey = query.get('key');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    const posts = useSelector((state) => state.posts.posts)
    return (
        <div>
            <Col key={idKey} className="d-flex w-100">
                <Card className="justify-content-center w-75 h-100">
                    <Card.Img variant="top" src={posts[idKey].imageUrl}/>
                    <Card.Body>
                        <Card.Title>{posts[idKey].title}</Card.Title>
                        <Card.Text>{posts[idKey].description}</Card.Text>
                        <hr/>
                        <Card.Title className="my-3">Analysts Comment</Card.Title>
                        <Card.Text className="font-italic">{posts[idKey].expertComment}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ArticleDetails;
