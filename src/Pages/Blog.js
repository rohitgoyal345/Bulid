import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// images

import blog_img1 from '../Assets/Images/blog1.jpg';
import blog_img2 from '../Assets/Images/blog2.jpg';
import blog_img3 from '../Assets/Images/blog3.jpg';

function Blog() {
  return (
    <div className="Blog_sec">
      <Container>
        <Row>

          <Col lg={12}>
            <div className="blog-title">
              <h6>What We Do For You</h6>
              <h2 className="mb-3">Latest <span>Blog</span></h2>
            </div>
          </Col>

            <Col lg={4}>
            <div className="blog-card-main">
               <div className="blog-img">
                  <img src={blog_img1} alt="team-img-1" />
                    <div className="overlay">
                        <div className="blog-text">
                            <ul>
                                <li><i class="bi bi-person-fill"></i> Admin</li>
                                <li><i class="bi bi-calendar2-week-fill"></i> 5 Feb 2025</li>
                            </ul>
                            <h4>Improve Workflow With Agile Construction!</h4>
                            <p>There are many variations of passages of Lorem Ipsum typesetting ... </p>
                            <Button className="blog_btn">Read More</Button>
                        </div>
                    </div>
               </div>
              
             </div>
            </Col>

            <Col lg={4}>
            <div className="blog-card-main">
               <div className="blog-img">
                  <img src={blog_img2} alt="team-img-1" />
                    <div className="overlay">
                        <div className="blog-text">
                            <ul>
                                <li><i class="bi bi-person-fill"></i> Admin</li>
                                <li><i class="bi bi-calendar2-week-fill"></i> 5 Feb 2025</li>
                            </ul>
                            <h4>Guide To Remodeling Your Building.</h4>
                            <p>There are many variations of passages of Lorem Ipsum typesetting ... </p>
                            <Button className="blog_btn">Read More</Button>
                        </div>
                    </div>
               </div>
              
             </div>
            </Col>

            <Col lg={4}>
            <div className="blog-card-main">
               <div className="blog-img">
                  <img src={blog_img3} alt="team-img-1" />
                    <div className="overlay">
                        <div className="blog-text">
                            <ul>
                                <li><i class="bi bi-person-fill"></i> Admin</li>
                                <li><i class="bi bi-calendar2-week-fill"></i> 5 Feb 2025</li>
                            </ul>
                            <h4>What Are The Benefits of LEED Certification?</h4>
                            <p>There are many variations of passages of Lorem Ipsum typesetting ... </p>
                            <Button className="blog_btn">Read More</Button>
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

export default Blog;