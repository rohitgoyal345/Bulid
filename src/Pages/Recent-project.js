import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// images
import recent_img1 from '../Assets/Images/recent1.jpg';
import recent_img2 from '../Assets/Images/recent2.jpg';
import recent_img3 from '../Assets/Images/recent3.jpg';
import recent_img4 from '../Assets/Images/recent4.jpg';
import recent_img5 from '../Assets/Images/recent5.jpg';
import recent_img6 from '../Assets/Images/recent6.jpg';

const recentProjects = [
  { id: 1, img: recent_img1, category: "Interiors", title: "Mechanical Trim" },
  { id: 2, img: recent_img2, category: "Modern Bridge", title: "Stone Harbor" },
  { id: 3, img: recent_img3, category: "Buildings", title: "Ferguson Family YMCA" },
  { id: 4, img: recent_img4, category: "Houses", title: "Eisenhower Elementary" },
  { id: 5, img: recent_img5, category: "Buildings, Houses", title: "Jewelers Mutual" },
  { id: 6, img: recent_img6, category: "Buildings, Houses", title: "Construction Management" }
];

function Recent({ filterCategory }) {
  // Filter items if a specific category is provided
  const filteredProjects = filterCategory
    ? recentProjects.filter((item) => item.category.includes(filterCategory))
    : recentProjects; 

  return (
    <div className="recent_sec">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="recent-title">
              <h6>Our Recent Projects</h6>   
              <h2>Our Special Projects See Now</h2>
            </div>
          </Col>

          {filteredProjects.map((item) => (
            <Col lg={4} key={item.id} className="mb-4">
              <div className="recent-card-main">
                <div className="recent-img">
                  <img src={item.img} alt={`recent-img-${item.id}`} />
                  <div className="recent-overlay">
                    <a href="#">
                      <i className="bi bi-plus"></i>
                    </a>
                    <div className="content">
                      <h4>{item.category}</h4>
                      <h5>{item.title}</h5>
                      <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
          
        </Row>
      </Container>
    </div>
  );
}

export default Recent;
