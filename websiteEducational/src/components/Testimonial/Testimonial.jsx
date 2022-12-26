import React from "react";
import { Container, Row, Col} from 'reactstrap';
import testimonialImage from '../../assests/testimonial.jpg'
import './testimonial.css';

const Testimonial = () => {
    return (
         <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' className="col">
                        <div className="testimonial__img">
                            <img src={testimonialImage} className='w-100' alt="" />
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="testimonial__content w-100">
                            <p className="subtitle">LOVED BY 200,000+ STUDENTS</p>
                            <h2 className="title mb-4">Students Community Feedback</h2>

                            <div className="single__testimonial">
                                <p className="content-p"> 
                                Rapidiously buildcollaboration anden deas sharing
                                 viaing and with bleedng edgeing nterfaces fnergstcally 
                                  plagiarize teams anbuling paradgms whereas goingi forward process
                                  and monetze
                                  </p>

                                  <div className="student__info mt-4">
                                    <h6 className="fw-bold">Madley Pondor</h6>

                                    <p className="content-p">UX designer</p>
                                  </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
         </section>
    )
}

export default Testimonial;