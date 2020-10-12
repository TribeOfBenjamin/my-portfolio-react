import React from "react";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2>Hello there!</h2>
            </div>
            <div className="container">
                <p>I'm Ben. and I'm <button className="buttonTeacher">a teacher</button> & <button className="buttonWebDev">a web developer</button> .</p>
                <br />
                <p className="floating">Learn more by clicking above</p>
            </div>

        </div>
    );
}

export default Home;
