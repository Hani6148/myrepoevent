import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Sidnav from "../components/SidNavBar"

class Feed extends Component {
  state = {
   
  };

  


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
           <Sidnav/>
          </Col>
          <Col size="md-6 sm-12">
          <Jumbotron>
              <h1>event</h1>
            </Jumbotron>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Feed;
