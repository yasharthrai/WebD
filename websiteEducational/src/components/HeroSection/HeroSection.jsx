import React from "react";
import { Container, Row, Col} from 'reactstrap';
import HeroImage from '../../assests/hero-img1.png'
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                        <h2 className="hero__title">
                            Learn The <br /> Skills You Need <br /> To Secceed 
                        </h2>
                        <p className="mb-5 hero__text">
                        Free online courses from the world’s Leading experts. join <br /> 18+ million Learners today.
                        </p>
                        </div>
                        <form className="search">
                            <input type="text" placeholder="Keyworlds of your course" />
                            <button className="search-btn">Search Course</button>
                        </form>
                    </Col>

                    <Col lg='6' md='6'>
                        <img src={HeroImage} className='w-100 hero__image' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection;