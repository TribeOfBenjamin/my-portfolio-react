import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "./ProjectCardPure.css";
import avatar from "../img_avatar.png";

function ProjectCards() {
    return (
        <div className="cardRow">

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer asdl;fkhasdf;lhasdlgjk;hasl;dkfhaslkdjfhaklsdfhaskdlfhaskldghaksdlgjhaskdlhasdklfhasdklfhaskldfhasdklfhaslkdjfhaskldjfhaskldjfhaksldjhasdlkfjh</p>
                    </div>
            </div>

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer</p>
                    </div>
            </div>

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer</p>
                    </div>
            </div>

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer</p>
                    </div>
            </div>

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer</p>
                    </div>
            </div>

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer</p>
                    </div>
            </div>

            <div className="card">
                <img className="cardImage" src={avatar} alt="Avatar" />
                    <div className="cardContainer">
                        <h3 className="cardTitle"><b>John Doe</b></h3>
                        <button className="buttonStart"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</button>
                        <button className="buttonGithub"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />GitHub Repository</button>
                        <p className="cardText">Architect & Engineer</p>
                    </div>
            </div>

        </div>
  );
}

export default ProjectCards;
