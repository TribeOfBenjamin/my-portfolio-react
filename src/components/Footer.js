import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

function Footer() {
    return (

            <Navbar className="footer" bg="primary" variant="dark" sticky="bottom">
                <p className="text">Finis origine pendet.</p>
            </Navbar>

    );
}

export default Footer;
