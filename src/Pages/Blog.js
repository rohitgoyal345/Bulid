import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';

// images

import blog_img1 from '../Assets/Images/blog1.jpg';
import blog_img2 from '../Assets/Images/blog2.jpg';
import blog_img3 from '../Assets/Images/blog3.jpg';

function Blog() {

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
    <div className="Blog_sec">
      <Container>
        <Row>

          <Col lg={12} xs={12} sm={12} md={12}>
            <div className="blog-title">
              <h6>What We Do For You</h6>
              <h2 className="mb-3">Latest <span>Blog</span></h2>
            </div>
          </Col>

            <Col lg={4} xs={12} sm={12} md={6} data-aos="zoom-in">
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

            <Col lg={4} xs={12} sm={12} md={6} data-aos="fade-up">
            <div className="blog-card-main blog-card2">
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

            <Col lg={4} xs={12} sm={12} md={6} data-aos="zoom-in-up">
            <div className="blog-card-main blog-card3">
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