import React from "react";
import { Container, Row, Col} from 'reactstrap';
import CountUp from "react-countup";
import AboutImage from '../../assests/about-us.png'

import './aboutUs.css'

const AboutUs = () => {
    return (
          <section>
            <Container>
                <Row>
                <Col lg='6' md='6'>
                 <div className="about__img">
                     <img src={AboutImage} className='w-100' alt="" />
                 </div>
              </Col>
                    
                <Col lg='6' md='6'>
                    <div className="about__content">
                        <h2>Good Qualification Services And Better Skills</h2>
                        <p>
                        Distinctively provide acces mutfuncto users whereas transparent proceses
                        somes ncentivize eficient functionalities rather than extensible archtectur
                         communicate leveraged services and cross-platform.
                        </p>

                        <div className="about__counter">
                            <div className="d-flex gap-5 align-items-center">

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={35} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                        Completed Projects
                                    </p>
                                </div>

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={16} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                        Patient Around World
                                    </p>
                                </div>

                            </div>

                            <div className="d-flex gap-5 align-items-center">
                            <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={98} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                       Ideas Raised Funds
                                    </p>
                                </div>

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={7} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                       Categories Served
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>    

                </Row>
            </Container>
          </section>
    )
}

export default AboutUs;