import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolstack from "../components/ToolStack";
import TechStack from "../components/TechStack";

// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";



const About:FC = () => { 
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className={"green"} style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conóceme
            </h1>
            <p className="about-body">Después de una década inmerso en el mundo audiovisual como 
            <i><b className="green"> director de fotografía</b></i>, 
            decidí emprender un emocionante cambio impulsado por mi fascinación por la tecnología:
             convertirme en <i><b className="green">desarrollador full stack.</b></i>
            </p>
            <p className="about-body">Ahora, mi día a día consiste en crear <i><b className="green">aplicaciones web</b></i>, siempre al tanto de las últimas tendencias tecnológicas.</p>
            <p className="about-body">Cuando no estoy inmerso en líneas de código, 
            me encontrarás <i><b className="green">explorando nuevos horizontes,</b></i> ya sea viajando a destinos exóticos 🚀,
             nadando en aguas cristalinas 🏊‍♂️ o cuidando con mimo de mis adorables plantas 🌱.
            </p>

              
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="green">Skillset </strong> Profesional
        </h1>

        <TechStack />

        <h1 className="project-heading">
          <strong className="green">Toolstack</strong> que uso
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
};

export default About;
