import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div>
            <div className="containerLogo">
                <h1 className="logo">
                    BV
                </h1>
            </div>
            <div className="containerHome">
                <div>
                    <h2 className="hello">Hello there!</h2>
                </div>
                <div>
                    <p>I'm Ben and I'm
                        <button className="buttonTeacher"> a teacher <span role="img">&#127822; </span></button>
                         & 
                        <Link to="/portfolio">
                            <button className="buttonWebDev">
                                a web developer <span role="img">&#128421;</span>
                            </button>
                        </Link>
                         .
                    </p>
                    <br />
                    <p className="floatingText">Learn more by clicking above</p>
                </div>

            </div>
        </div>
    );
}

export default Home;
