import { useLocation } from "react-router-dom";
import React  from "react";
import {Card,Col} from "react-bootstrap/";
const ArticleDetails = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const title = query.get("title");
    const img = query.get("img");
    const describe = query.get("describe");
    const text = query.get("text");

    return (
        <Col  className = "d-flex w-100" >
            <Card className="justify-content-center w-75 h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{describe}</Card.Text>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ArticleDetails;
