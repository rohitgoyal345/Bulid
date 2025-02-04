import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
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
    <div className="about_sec">
      <Container>
        <Row>
          <Col lg={6} xs={12} sm={12} md={12} data-aos="fade-right">
            <div className="about-title">
              <h6>Welcome Our Company</h6>
              <h2>Our 28 Years</h2>
              <h2 className="mb-3">
                Working <span>Experience.</span>
              </h2>
              <p>
                Building Expert explains how you can enjoy high end flooring
                trends like
              </p>
              <p>
                textured wood and with new laminate flooring. As the general
                contractor,
              </p>
              <p>we first create the highe rust integrity with our clients.</p>
            </div>
          </Col>

          <Col lg={6} xs={12} sm={12} md={12}>
            <div className="about-img">
              <div className="about-imgs"></div>
              <div className="about-img-shape1"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
