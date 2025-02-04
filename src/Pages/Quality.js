import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";

// image

import card_img1 from "../Assets/Images/quality1.png";
import card_img2 from "../Assets/Images/quality2.png";
import card_img3 from "../Assets/Images/quality3.png";

function Quality() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="quality_sec">
      <Container>
        <Row>
          <Col lg={12} xs={12} sm={12} md={12}>
            <div className="quality_heading">
              <p>The Best A Grade Commercial & Residential Services</p>
              <h2>High Quality Construction Solutions</h2>
              <h2>
                For <span>Residentials</span> & Industries!
              </h2>
            </div>
          </Col>

          <Col lg={4} xs={12} sm={12} md={6} data-aos="fade-right">
            <Card className="quality_card">
              <div className="quality_card_img">
                <img src={card_img1} alt="" />
              </div>
              <Card.Body className="quality_card_body">
                <a href="">Factory Manufacture And Automobile</a>
                <p>
                  Ut porta cursus ante. Aliquam vitae laoreet turpis. Maecenas
                  libero ...
                </p>
                <Button className="quality_btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} xs={12} sm={12} md={6} data-aos="fade-up">
            <Card className="quality_card quality-card2" >
              <div className="quality_card_img">
                <img src={card_img2} alt="" />
              </div>
              <Card.Body className="quality_card_body">
                <a href="">Metal Engineering & Construction</a>
                <p>
                  In ac urna sodales, sagittis ligula sit laoreet amet and
                  viverra quam. ...
                </p>
                <Button className="quality_btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} xs={12} sm={12} md={6} data-aos="fade-left">
            <Card className="quality_card quality_card3">
              <div className="quality_card_img">
                <img src={card_img3} alt="" />
              </div>
              <Card.Body className="quality_card_body">
                <a href="">Roof Renovation & Building</a>
                <p>
                  Morbi varius enim in nulla lobortis, ac tempus enim tristique.
                  ...
                </p>
                <Button className="quality_btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quality;
