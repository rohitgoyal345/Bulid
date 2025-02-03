import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// images

import service_img1 from '../Assets/Images/service-1.jpg';
import service_img2 from '../Assets/Images/service-2.jpg';
import service_img3 from '../Assets/Images/service-3.jpg';

function Service() {
  return (
    <div className="Service_sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="service-title">
              <h6>What We Do For You</h6>
              <h2>
                We Provide Our <span>Service</span>
              </h2>
              <h2 className="mb-3">For Our Coustomer</h2>
            </div>
          </Col>

            <Col lg={4}>
            <div className="service-card-main">
               <div className="service-img">
                  <img src={service_img1} alt="service-img-1" />
                  <div className="service-heading">
                    <h4>Construction Managment</h4>
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a> 
                  </div>
                  <div className="service-overlay">
                    {/* <a href="">
                      <i class="bi bi-plus"></i>
                    </a> */}
                    <div className="service-content">
                       <h4>Construction Managment</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r ut labore et magna aliqua. ...</p>
                    </div>
                  </div>
               </div>
             </div>
            </Col>

            <Col lg={4}>
            <div className="service-card-main">
               <div className="service-img">
                  <img src={service_img2} alt="service-img-1" />
                  <div className="service-heading">
                    <h4>Architecture Design</h4>
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a> 
                  </div>
                  <div className="service-overlay">
                    {/* <a href="">
                      <i class="bi bi-plus"></i>
                    </a> */}
                    <div className="service-content">
                       <h4>Architecture Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r ut labore et magna aliqua. ...</p>
                    </div>
                  </div>
               </div>
             </div>
            </Col>

            <Col lg={4}>
            <div className="service-card-main">
               <div className="service-img">
                  <img src={service_img3} alt="service-img-3" />
                  <div className="service-heading">
                    <h4>Painting</h4>
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a> 
                  </div>
                  <div className="service-overlay">
                    {/* <a href="">
                      <i class="bi bi-plus"></i>
                    </a> */}
                    <div className="service-content">
                       <h4>Painting</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r ut labore et magna aliqua. ...</p>
                    </div>
                  </div>
               </div>
             </div>
            </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Service;
