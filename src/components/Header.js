import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header() {
    return (

        <Navbar bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#about">Benjamin Vasko</Navbar.Brand>
            </Container>
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Header;
