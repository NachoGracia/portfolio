import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
//import ProjectCard from "./ProjectCards";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

const Projects:FC =() =>{
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
              description="Frontend de una red social SPA creado con JavaScript y React."
              ghLink="https://github.com/GrupoUnoNeoland/oyeVecino-frontend"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/diyouj1se/image/upload/v1714337637/portfolio/j6tcfn9zpbwykmvkrpre.png"
              isBlog={false}
              title="oyeVecino backend"
              description="Backend de una red social SPA creado con Node.js, express y MongoDB "
              ghLink="https://github.com/GrupoUnoNeoland/oyeVecino-backend"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/diyouj1se/image/upload/v1714337649/portfolio/gsp1qvx6u37anpil9vsu.png"
              isBlog={false}
              title="Hub de juegos"
              description="SPA con una pokeAPI, dos juegos contra el ordenador y un modo dark.
              Realizado con JavaScript y Node.js"
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
