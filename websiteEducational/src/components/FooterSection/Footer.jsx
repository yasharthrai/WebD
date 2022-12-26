/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import logo from '../../assests/logo.png'
import './footer.css'

const footerQuickLinks = [
    {
      display: "Life Coach",
      url: "#",
    },
    {
      display: "Business Coach",
      url: "#",
    },
  
    {
      display: "Health Coach",
      url: "#",
    },
  
    {
      display: "Development",
      url: "#",
    },
  ];
  
  const footerInfoLinks = [
    {
      display: "Community",
      url: "#",
    },
    {
      display: "Support",
      url: "#",
    },
  
    {
      display: "Video Guides",
      url: "#",
    },
  
    {
      display: "Documentation",
      url: "#",
    },
  ];

const Footer = () => {
    return (
      <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' md='6' className="mb-4">
                   <h2 className="d-flex align-items-center gap-1">
                    <img src={logo}  alt="" />
                   </h2>

                   <div className="follows">
                    <p className="mb-0 footer-follow">Follow Us</p>
                     <br />
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-facebook-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-instagram-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-linkedin-line"></i>
                        </a>
                     </span>
                     <span>
                        {" "}
                        <a href="#">
                            <i className="ri-twitter-line"></i>
                        </a>
                     </span>
                   </div>
                </Col>
                <Col lg='3' md='6' className="mb-4">
                    <h6 className="footer-title">Courses</h6>
                    <ListGroup className='link-list'>
                      {footerQuickLinks.map((item, index) => (
                        <ListGroupItem key={index} className='border-0 ps-0 link-item'>
                            {" "}
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                </Col>

                <Col lg='3' md='6'>
                   <h6 className="footer-title">
                    Resourses
                   </h6>
                   <ListGroup className='link-list'>
                      {footerInfoLinks.map((item, index) => (
                        <ListGroupItem key={index} className='border-0 ps-0 link-item'>
                            {" "}
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                </Col>

                <Col lg='3' md='6'>
                    <h6 className="footer-title">Get In Touch</h6>

                    <p className="address">55 Main Street, 2nd Block, New York</p>
                    <p className="address">support@gmail.com</p>
                </Col>
            </Row>
        </Container>
      </footer>
    )
}

export default Footer;