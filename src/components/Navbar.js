import React , { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

// Navbar logo
// import Image_Logo from '../Assets/Images/navbar-logo.svg';

function NavbarMain() {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
    <div className="top_nav">
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div class="logo">
              <a href="#">
                <h1>Builderz</h1>
              </a>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={4}>
                <div class="top-bar-item">
                  <div class="top-bar-icon">
                    <i class="bi bi-clock-fill"></i>
                  </div>
                  <div class="top-bar-text">
                    <h3>Opening Hour</h3>
                    <p>Mon - Fri, 8:00 - 9:00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div class="top-bar-item">
                  <div class="top-bar-icon">
                    <i class="bi bi-telephone-inbound-fill"></i>
                  </div>
                  <div class="top-bar-text">
                    <h3>Call Us</h3>
                    <p>+012 345 6789</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div class="top-bar-item">
                  <div class="top-bar-icon">
                    <i class="bi bi-envelope-at-fill"></i>
                  </div>
                  <div class="top-bar-text">
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

    <div className={`nav_bar ${scrolling ? "scrolled" : ""}`}>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="me-auto navbar-nav">
            <Nav.Link as={NavLink} to="/" exact > Home </Nav.Link>
            <Nav.Link as={NavLink} to="/about" > About </Nav.Link>
            <Nav.Link as={NavLink} to="/service" > Service </Nav.Link>
            <Nav.Link as={NavLink} to="/team" > Team </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" > Blog </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" > Contact Us </Nav.Link>
          </Nav>
        <Nav.Link as={NavLink} to="/login" className="ml-auto nav-btn">
          Get A Quote
        </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

    </>

  );
}

export default NavbarMain;
