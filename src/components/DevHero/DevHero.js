import React from "react";
import { Link } from "react-router-dom";
import "./DevHero.css";

function DevHero() {
    return (
        <div>
            <div className="containerTitle">
                <h1 className="title">
                    Passionate Development
                </h1>
            </div>
            <div className="containerSubtitle">
                <p className="subtitle">
                    I bring ideas to life with creative design and solid development. Learn more by perusing this site or by reaching out via email.
                </p>
            </div>

            <div className="containerButtons">
                <Link to="/portfolio">
                    <button className="buttonPortfolio">
                        View Ben's work
                    </button>
                </Link>
                <Link to="/about">
                    <button className="buttonAbout">
                        More about Ben
                    </button>
                </Link>
            </div>



        </div>
    );
}

export default DevHero;
