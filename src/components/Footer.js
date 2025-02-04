import { Container, Row, Col} from "react-bootstrap";



function Collection() {
  return (
    <div className="footer-sec">
      <Container>
        <Row>

          <Col lg={3} xs={12} sm={12} md={6} >
            <div className="footer-title">
              <a href="#">
                <h1>Builderz</h1>
              </a>
              <p>Over 28 years experience and knowledge international standards, technologicaly changes & industrial systems, we are dedicated to provides seds the</p>
            </div>
          </Col>
          <Col lg={3} xs={12} sm={12} md={6} >
            <div className="footer-title">
              <h4>Our Services</h4>
              <ul>
                <li><a href=""><i class="bi bi-chevron-right"></i>Engineering Project</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>Architecture & Building</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>Construction Managment</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>Engineering Project</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>Factory Manufacture</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} xs={12} sm={12} md={6} >
            <div className="footer-title">
              <h4>Useful Links</h4>
              <ul>
                <li><a href=""><i class="bi bi-chevron-right"></i>Home</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>About Us</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>Service</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>Interior Design</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i>FAQ</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} xs={12} sm={12} md={6} >
            <div className="footer-title">
              <h4>Get In Touch</h4>
              <ul>
                <li><a href=""><i class="bi bi-chevron-right"></i> 24 Fifth, Los Angeles, USA</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i> info@example.com</a></li>
                <li><a href=""><i class="bi bi-chevron-right"></i> +145 (03) 456 0000</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={6} xs={12} sm={12} md={6}>
            <div className="copyright">
               <p>Copyright© All Rights Reserved RinBuild.</p>
            </div>
          </Col>
          <Col lg={6} xs={12} sm={12} md={6} >
            <div className="copyright-social">
              <ul>
                <li><a href><i class="bi bi-instagram"></i></a></li>
                <li><a href=""><i class="bi bi-facebook"></i></a></li>
                <li><a href=""><i class="bi bi-twitter"></i></a></li>
                <li><a href=""><i class="bi bi-skype"></i></a></li>
              </ul>
            </div>
          </Col>

        </Row>
      </Container>
    </div>

  );
}

export default Collection;
