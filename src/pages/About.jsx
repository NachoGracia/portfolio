import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolstack from "../components/ToolStack";
import TechStack from "../components/TechStack";

// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

const About = () => {
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conóceme
            </h1>
            {/* <Aboutcard /> */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
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
