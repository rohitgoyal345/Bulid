import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// images

import team_img1 from "../Assets/Images/team-1.jpg";
import team_img2 from "../Assets/Images/team-3.jpg";
import team_img3 from "../Assets/Images/team-2.jpg";

function Team() {
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
    <div className="Team_sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="Team-title">
              <h6>What We Do For You</h6>
              <h2>We Provide Our Service With</h2>
              <h2 className="mb-3">
                Our <span>Expert Team</span>
              </h2>
            </div>
          </Col>

          <Col lg={4} xs={12} sm={12} md={6} data-aos="flip-up">
            <div className="team-card-main">
              <div className="team-img">
                <img src={team_img1} alt="team-img-1" />
                <div className="circular-menu">
                  <div className="items-wrapper">
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-skype"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </div>
                  <div className="floating-btn">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-text">
                <h4>Joseph Crawford</h4>
                <p>Project Manager </p>
              </div>
            </div>
          </Col>

          <Col lg={4} xs={12} sm={12} md={6} data-aos="fade-up">
            <div className="team-card-main team-card2">
              <div className="team-img">
                <img src={team_img2} alt="team-img-1" />
                <div className="circular-menu">
                  <div className="items-wrapper">
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-skype"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </div>
                  <div className="floating-btn">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-text">
                <h4>Allison Herman</h4>
                <p>Map Designer</p>
              </div>
            </div>
          </Col>

          <Col lg={4} xs={12} sm={12} md={6} data-aos="flip-down">
            <div className="team-card-main team-card3">
              <div className="team-img">
                <img src={team_img3} alt="team-img-1" />
                <div className="circular-menu">
                  <div className="items-wrapper">
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-skype"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </div>
                  <div className="floating-btn">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-text">
                <h4>Anthony Notson</h4>
                <p>Interior Designer</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Team;
