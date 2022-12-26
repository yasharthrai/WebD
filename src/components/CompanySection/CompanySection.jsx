import React from "react";
import { Container, Row, Col} from 'reactstrap';
import Company1 from '../../assests/company-1.png'
import Company2 from '../../assests/company-2.png'
import Company3 from '../../assests/company-3.png'
import Company4 from '../../assests/company-4.png'
import Company5 from '../../assests/company-5.png'
import Company6 from '../../assests/company-6.png'
import './CompanySection.css';

const CompanySection = () => {
    return (
          <section>
            <Container>
                <Row>
                    <Col className="sponsor-thumb" lg='2' md='3' sm='4' xs='6'>
                         <img src={Company1} alt="" />
                    </Col>
                    <Col className="sponsor-thumb" lg='2' md='3' sm='4' xs='6'>
                         <img src={Company2} alt="" />
                    </Col>
                    <Col className="sponsor-thumb" lg='2' md='3' sm='4' xs='6'>
                         <img src={Company3} alt="" />
                    </Col>
                    <Col className="sponsor-thumb" lg='2' md='3' sm='4' xs='6'>
                         <img src={Company4} alt="" />
                    </Col>
                    <Col className="sponsor-thumb" lg='2' md='3' sm='4' xs='6'>
                         <img src={Company5} alt="" />
                    </Col>
                    <Col className="sponsor-thumb" lg='2' md='3' sm='4' xs='6'>
                         <img src={Company6} alt="" />
                    </Col>
                </Row>
            </Container>
          </section>
    )
}

export default CompanySection;