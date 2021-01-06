import React  from 'react';
import { FooterSection , FooterDesc, Row, Col} from './style.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Footer = () => {
    return (
      <Router>
        <FooterSection>
            <Row>
              <Col size={1}>
                <h4><u>Contact</u></h4>
              </Col>
              <Col size={1}>
                <h4><u>Ηours of operation</u></h4>
              </Col>
              <Col size={1}>
                <h4><u>Insurance entity</u></h4>
              </Col>              
              <Col size={1}>
                <h4><u>Useful links</u></h4>
              </Col>
            </Row>
            <Row>
              <Col size={1}>
                +30 213 1516649
              </Col>
              <Col size={1}>
                Tuesday - Friday
                round-the-clock
              </Col>
              <Col size={1}>
                <Col>
                  <p><Link to="/">EFKA</Link></p>
                </Col>
              </Col>              
              <Col size={1}>
                <Col>
                  <p><Link to="/">Link 1</Link></p>
                </Col>
              </Col>
            </Row>   
            <Row>
              <Col size={1}></Col>
              <Col size={1}></Col>
              <Col size={1}>
                <Col>
                  <p><Link to="/">IKA</Link></p>
                </Col>
              </Col>              
              <Col size={1}>
                <Col>
                  <p><Link to="/">Link 2</Link></p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col size={1}></Col>
              <Col size={1}></Col>
              <Col size={1}>
                <Col>
                  <p><Link to="/">OKANA</Link></p>
                </Col>
              </Col>              
              <Col size={1}>
                <Col>
                  <p><Link to="/">Link 3</Link></p>
                </Col>
              </Col>
            </Row>
            <FooterDesc> <u>copyright &copy; 2020 by University of Athens</u> </FooterDesc>
        </FooterSection>


        </Router>
    )
}

export default Footer;