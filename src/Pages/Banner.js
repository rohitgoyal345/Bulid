import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// pages import

import Quality from "./Quality";
import About from  "./About";
import Countdown from  "./Countdown";
import Recent from "./Recent-project";
import Video from "./Video";
import Service from "./Service";
import Team from "./Team";
import Blog from "./Blog";

function Banner() {
  return (
    <>
    <div className="banner_sec">
      <Container>
        <Row>

          <Col lg={12}>
            <div className="banner_main">
              <div className="banner_title">
                <h4>Great Experience in Building</h4>
                <h2>We Provide </h2>
                <h2><span>Effective</span> Solution</h2>
                <p>It is a long established fact that a reader will be distracted by the </p>
                <p> readable content of a page when looking at its layout. </p>
                <Button className="Banner_btn">Get In Touch</Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
     <Quality />
     <About />
     <Countdown />
     <Recent />
     <Video />
     <Service />
     <Team />
     <Blog />
    </>
  );
}

export default Banner;
