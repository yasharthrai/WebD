import React, { useState } from "react";
import './Choose.css'
import {Container, Row, Col} from 'reactstrap';
import ReactPlayer from "react-player";
import chooseimg from '../../assests/video-bg.jpg';

const ChooseUS = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
          <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="choose__content">
                            <h2>Get Every Single Notifications</h2>
                            <p className="choose-text">
                            Sit amet consectetur adipiscinelit eiusmod tempor
                              incididunt ut labore et dolore magna aliqua suspendisse 
                             ultrices gravida. commodo viverra maecenas accumsan facilisis.
                              Sit amet consectetur adipiscinelit eiusmod tempor
                              incididunt ut labore et dolore magna aliqua suspendisse 
                               ultrices gravida. commodo viverra maecenas accumsan facilisis.
                               Sit amet consectetur adipiscinelit eiusmod tempor
                              incididunt ut labore et dolore magna aliqua suspendisse 
                                ultrices gravida. commodo viverra maecenas accumsan facilisis.
                               Sit amet consectetur adipiscinelit eiusmod tempor
                              incididunt ut labore et dolore magna aliqua suspendisse 
                             ultrices gravida. 
                            </p>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="choose-img">
                            {showVideo ? (
                                <ReactPlayer 
                                 url='#'
                                 controls
                                 width='100%'
                                 height='350px'
                                />
                            ): (
                                <img src={chooseimg} className='w-100' alt="" />
                            )}

                            {!showVideo && (
                                <span className="play__icon">
                                    <i className="ri-play-circle-line" onClick={() =>setShowVideo(!showVideo)}></i>
                                </span>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
          </section>
    )
}

export default ChooseUS;