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
                src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif"
                fluid
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="green"> C++, Javascript and Go. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="green">Web Technologies and Products </b> and
                  also in areas related to <b className="green">Blockchain.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="green">Node.js</b> and
                <i>
                  <b className="green">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="green"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              {/* <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt> */}
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
