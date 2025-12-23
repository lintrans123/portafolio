import { Container, Row, Col } from "react-bootstrap";
import { Mailchimp } from "./Mailchimp";
import logo from "../imagen/logo.svg";
import navIcon1 from "../imagen/nav-icon1.svg";
import navIcon2 from "../imagen/nav-icon2.svg";
import navIcon3 from "../imagen/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
            <Mailchimp />
       
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


