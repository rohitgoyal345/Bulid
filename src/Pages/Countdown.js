import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from "react-bootstrap";



function Countdown() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          once: false, 
        });
    
        const handleScroll = () => {
          AOS.refresh();
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div className="countdown_sec">
      <Container fluid>
        <Row>

          <Col lg={6} className="px-0" data-aos="fade-right">
            <div className="count-main">
               <div className="row">
                 
                  <div className="col-lg-6">
                     <div className="count-title">
                        <i class="bi bi-people-fill"></i>
                        <h4>Expert Workers</h4>
                        <h5>289+</h5>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="count-title">
                        <i class="bi bi-buildings-fill"></i>
                        <h4>Completed Projects</h4>
                        <h5>1299+</h5>
                     </div>
                  </div>

               </div>
            </div>
          </Col>

          <Col lg={6} className="px-0" data-aos="fade-left">
            <div className="count-main count-main2">
               <div className="row">
                 
                  <div className="col-lg-6">
                     <div className="count-title count-title2">
                        <i class="bi bi-people-fill"></i>
                        <h4>Trusted By</h4>
                        <h5>4390+</h5>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="count-title count-title2">
                        <i class="bi bi-award"></i>
                        <h4>Awards</h4>
                        <h5>3390+</h5>
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

export default Countdown;
