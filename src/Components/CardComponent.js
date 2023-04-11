import React from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CardComponent = ({id,title, description, imageUrl}) => {

    CardComponent.propTypes = {
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };

    return (
        <Card style={{ width: "18rem"}}>

            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/articles/${id}?title=${title}&img=${imageUrl}&${description}}`}>Read more</Link>
            </Card.Body>
        </Card>
    );
};
export default CardComponent
