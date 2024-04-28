import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
//import ProjectCard from "./ProjectCards";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mis<strong className="green"> trabajos </strong> recientes
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/diyouj1se/image/upload/v1714337637/portfolio/j6tcfn9zpbwykmvkrpre.png"
              isBlog={false}
              title="oyeVecino frontend"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/GrupoUnoNeoland/oyeVecino-frontend"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/diyouj1se/image/upload/v1714337637/portfolio/j6tcfn9zpbwykmvkrpre.png"
              isBlog={false}
              title="oyeVecino backend"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/GrupoUnoNeoland/oyeVecino-backend"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/diyouj1se/image/upload/v1714337649/portfolio/gsp1qvx6u37anpil9vsu.png"
              isBlog={false}
              title="Hub de juegos"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/NachoGracia/HUB-Juegos"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
