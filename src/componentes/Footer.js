import { Container, Row, Col } from "react-bootstrap";
import { Mailchimp } from "./Mailchimp";
import logo from "../imagen/milogo.png";
import navIcon1 from "../imagen/nav-icon1.svg";
import navIcon2 from "../imagen/nav-icon2.svg";
import navIcon3 from "../imagen/nav-icon3.svg";

export const Footer = () => {
  return (
    <>
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
            <Mailchimp />
        </Row>
      </Container>
      </footer>
     <footer className="fote">
      <Container> 
        <Row className="downer-footer">
          <Col size={12} sm={6} className="flex-column1">
            <img src={logo} className="logo" />
          </Col>
          <Col size={12} sm={6} className="flex-column2">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/napoleon-lindher-cardenas-sanchez-871952258/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100074640123391"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/lind_card_2006/?next=%2F"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>

    </>
  )
}


