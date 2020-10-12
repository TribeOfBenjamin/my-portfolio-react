import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


function Header() {
    return (
        <nav className="headerContainer">
            <ul className="navList">
                <li className="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <h1 className="navLogo">BV</h1>
            <ul className="navList">
                <li className="navLink">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="navLink">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Header;