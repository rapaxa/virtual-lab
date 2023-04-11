import Container from 'react-bootstrap/Container';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function Navigations() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/articles">News One</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="articles">
                            <Nav.Link>Articles</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Navigations;