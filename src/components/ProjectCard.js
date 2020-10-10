import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <div>

      <CardGroup>
        <Card className="projectCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Spark Forums</Card.Title>
            <Card.Text>
              A forum to discuss what's on your mind free of censorship.
      </Card.Text>
            <Button className="buttonStart" variant="primary"><FontAwesomeIcon className="icon fa-lg" icon={faPlay} />Start</Button>
            <Button className="buttonGithub" variant="primary"><FontAwesomeIcon className="icon fa-lg" icon={faGithub} />
            <span className="githubText">Github Repository</span>
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 9/19/20</small>
          </Card.Footer>
        </Card>

        <Card className="projectCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Wheels Up</Card.Title>
            <Card.Text>
              A travel app which makes it easy to track where you've been and where you're going.
      </Card.Text>
            <Button className="buttonStart" variant="primary">Start</Button>
            <Button variant="primary">GitHub Repository</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 8/20/20</small>
          </Card.Footer>
        </Card>

        <Card className="projectCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Spark Forums</Card.Title>
            <Card.Text>
              A forum to discuss what's on your mind free of censorship.
      </Card.Text>
            <Button className="buttonStart" variant="primary">Start</Button>
            <Button variant="primary">GitHub Repository</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 9/19/20</small>
          </Card.Footer>
        </Card>

      </CardGroup>

      <CardGroup>
        <Card className="projectCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Spark Forums</Card.Title>
            <Card.Text>
              A forum to discuss what's on your mind free of censorship.
      </Card.Text>
            <Button className="buttonStart" variant="primary">Start</Button>
            <Button variant="primary">GitHub Repository</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 9/19/20</small>
          </Card.Footer>
        </Card>

        <Card className="projectCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Wheels Up</Card.Title>
            <Card.Text>
              A travel app which makes it easy to track where you've been and where you're going.
      </Card.Text>
            <Button className="buttonStart" variant="primary">Start</Button>
            <Button variant="primary">GitHub Repository</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 8/20/20</small>
          </Card.Footer>
        </Card>

        <Card className="projectCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Spark Forums</Card.Title>
            <Card.Text>
              A forum to discuss what's on your mind free of censorship.
      </Card.Text>
            <Button className="buttonStart" variant="primary">Start</Button>
            <Button variant="primary">GitHub Repository</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 9/19/20</small>
          </Card.Footer>
        </Card>

      </CardGroup>
    </div>
  );
}

export default ProjectCard;
