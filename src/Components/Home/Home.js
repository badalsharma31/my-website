import React from "react";
import "./Home.css"
import { Button, Container, Row, Col } from 'react-bootstrap';
import terminalIcon from "../../public/laptop1.svg"

function Home() {
  return (
    <div>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid nav-bg">
          {/* <div className="row">
            <div className="clo-10 mx-auto"> */}
              {/* <div className="col-md-6 pt-5 order-2 order-lg-1">
                <h1>
                  Hi, I am Badal Sharma. I am working as Software Developer.
                </h1>
                <h2>
                  Hi, I am Badal Sharma. I am working as Software Developer.
                </h2>
                <div className = "mt-3">
                  <a href="" className="btn-get-started">
                    Get Started
                  </a>
                </div>
              </div>    */}
              <div className="mx-auto" style={{paddingTop: 50}}>
              <Container >
                <Row className="d-flex align-items-center">
                  <Col sm={6} >
                    <h1>
                      Hi, I am Badal Sharma.
                    </h1>
                    <h2>
                      I am working as Software Developer.
                    </h2>
                    <Button>
                      Get Started
                    </Button>
                  </Col>
                  <Col sm={6} className="d-flex justify-content-center">
                    <img src={terminalIcon} alt="terminal image" style={{width: "100%"}}></img>
                  </Col>
                </Row>
              </Container>
              </div>
            {/* </div>
          </div> */}
        </div>
      </section>

    </div>
  )
}

export default Home;


{/* <div className="container-fluid nav-bg">
          <div className="row">
            <div className="clo-10 mx-auto">
              
            </div>
          </div>
        </div> */}