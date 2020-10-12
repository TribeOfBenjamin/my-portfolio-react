import React from "react";
import "./Home.css";

function Home() {
    return (
        <div>
            <div className="container">
                <h2>Hello there!</h2>
            </div>
            <div className="container">
                <p>I'm Ben and I'm <button className="buttonTeacher">a teacher &#127822;</button> & <button className="buttonWebDev">a web developer &#128421;</button> .</p>
                <br />
                <p className="floating">Learn more by clicking above</p>
            </div>

        </div>
    );
}

export default Home;
