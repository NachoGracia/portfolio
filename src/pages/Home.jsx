import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import {AiFillLinkedin, AiOutlineGithub} from "react-icons/ai"
import Type from "../components/Type";

export const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col xs={12}md={6} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hola! 
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> Nacho Gracia</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <Type/>
              </div>
            </Col>
            <Col xs={12}md={6}>
              <Image className="home-gif"
                width={400}
                height={400}
                alt="171x180"
                src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif?cid=790b7611y03nlp1r4ibva5wepdz455mmcqm5j6428rkg68rl&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                fluid
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                Este es mi portfolio web de desarrollador full stack !
                <br />
                <br />Está desarrollado con 
                <i>
                  <b className="green"> Javascript, React.js y React-bootstrap. </b>
                </i>
                <br />
                <br />
                Te invito a que te des una vuelta por esta <i><b className="green">SPA</b></i> y así puedas conocerme un poco.
                {/* <i>
                  <b className="green"></b> <b className="green"></b>
                </i> */}
                <br />
                <br />
                
              </p>
            </Col>
            <Col md={4} className="myAvtar">
      
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
             
              <p>
                <span className="green">Conecta </span>conmigo!
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/NachoGracia"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineGithub/>
                  </a>
                </li>
              
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/gracianacho/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillLinkedin/>
                  </a>
                </li>
                
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
