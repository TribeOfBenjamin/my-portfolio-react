import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="containerHome">
            <div>
                <h2 className="hello">Hello there!</h2>
            </div>
            <div>
                <p>I'm Ben and I'm <button className="buttonTeacher">a teacher &#127822;</button> & <button className="buttonWebDev">a web developer &#128421;</button> .</p>
                <br />
                <p className="floating">Learn more by clicking above</p>
            </div>

        </div>
    );
}

export default Home;
