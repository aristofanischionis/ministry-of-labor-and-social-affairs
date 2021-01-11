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
                <h4><u>Επικοινωνία</u></h4>
              </Col>
              <Col size={1}>
                <h4><u>Ωράριο</u></h4>
              </Col>
              <Col size={1}>
                <h4><u>Aσφαλιστικοί Φορείς</u></h4>
              </Col>              
              <Col size={1}>
                <h4><u>Χρήσιμοι σύνδεσμοι</u></h4>
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
                  <a href='https://www.efka.gov.gr/el' target="_blank" rel="noopener noreferrer">ΕΦΚΑ</a>
                </Col>
              </Col>              
              <Col size={1}>
              <Col>
                <a href='/FAQ'>Συχνές ερωτήσεις</a>                
                </Col>
              </Col>
            </Row>   
            <Row>
              <Col size={1}></Col>
              <Col size={1}></Col>
              <Col size={1}>
                <Col>
                <a href='https://www.ika.gr/' target="_blank" rel="noopener noreferrer">ΙΚΑ</a>
                </Col>
              </Col>              
              <Col size={1}>
              <Col>
                {/* TODO: DO this  */}
                  <Link to="/europe#info"><p>Ε.Ε.</p></Link>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col size={1}></Col>
              <Col size={1}></Col>
              <Col size={1}>
                <Col>
                <a href='https://www.oga.gr/index.php' target="_blank" rel="noopener noreferrer">ΟΓΑ</a>
                </Col>
              </Col>              
              <Col size={1}>
              </Col>
            </Row>
            <Row>
              <Col size={1}></Col>
              <Col size={1}></Col>
              <Col size={1}>
                <Col>
                <a href='https://www.oaee.gr/' target="_blank" rel="noopener noreferrer">ΟΑΕΕ</a>
                </Col>
              </Col>              
              <Col size={1}>
              </Col>
            </Row>
            <FooterDesc> <u>copyright &copy; 2020 by University of Athens</u> </FooterDesc>
        </FooterSection>
        </Router>
    )
}

export default Footer;