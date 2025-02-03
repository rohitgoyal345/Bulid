import React, {useState} from "react";
import { Container, Row, Col , Modal} from "react-bootstrap";


function Video() {

  const [show, setShow] = useState(false);

  return (
    <div className="Video_sec">
      <Container>
        <Row>

            <Col lg={12}>
                <div className="video-title">
                  <a href="" onClick={(e) => { e.preventDefault(); setShow(true); }}>
                    <i class="bi bi-play-fill"></i>
                  </a>
                </div>
            </Col>

         
        </Row>
      </Container>

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
  <Modal.Header>
    <button className=" video-btn btn p-0 border-0" onClick={() => setShow(false)}>
      <i className="bi bi-x-circle fs-4"></i>
    </button>
  </Modal.Header>
  <Modal.Body className="p-0">
    <div className="video-container">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/4BzjUq921Y4?autoplay=1&mute=1"
        title="Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </Modal.Body>
</Modal>
     
    </div>
  );
}

export default Video;
