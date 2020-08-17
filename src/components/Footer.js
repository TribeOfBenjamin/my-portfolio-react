import React from "react";
import Navbar from "react-bootstrap/Navbar";

const styles = {

    center: {
        margin: "auto",
        fontSize: "12px",
        fontStyle: "italic"
    }

};

function Footer() {
    return (

            <Navbar bg="primary" variant="dark" sticky="bottom">
                <Navbar.Brand style={styles.center}>Finis origine pendet.</Navbar.Brand>
            </Navbar>

    );
}

export default Footer;
