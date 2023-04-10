import React from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CardComponent = ({id,title,text, describe, img}) => {

    CardComponent.propTypes = {
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        describe: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{describe}</Card.Text>
                <Link to={`/articles/${id}?title=${title}&img=${img}&describe=${describe}&text=${text}`}>Read more</Link>
            </Card.Body>
        </Card>
    );
};
export default CardComponent
