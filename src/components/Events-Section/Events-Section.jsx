import React from "react"; 
import './Event.css';
import { Container, Row, Col} from 'reactstrap';
import eventsImg01 from '../../assests/event1.jpg'
import eventsImg02 from '../../assests/event2.jpg'
import eventsImg03 from '../../assests/event1.jpg'
import eventsImg04 from '../../assests/event2.jpg'
import EventCard from "./EventCard";

const eventsData = [
    {
      id: "01",
      title: "How Much Needs Life Coach For Human Beings",
      imgUrl: eventsImg01
    }, 
    {
      id: "02",
      title: "How Much Needs Life Coach For Human Beings",
      imgUrl: eventsImg02
    },
    {
      id: "03",
      title: "How Much Needs Life Coach For Human Beings",
      imgUrl: eventsImg03
    }, 
    {
      id: "04",
      title: "How Much Needs Life Coach For Human Beings",
      imgUrl: eventsImg04
    }
  ];

const EventSection = () => {
    return (
          <section className="events-section">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2 className="fw-bold event-title">We’reArranged Yearly Cultural <br /> Events & Program</h2>
                    </Col>

                {eventsData.map((item) => (
                    <Col lg='3' md='4' className="mb-4" key={item.id}>
                        <EventCard item={item} />
                    </Col>
                ))}
                </Row>
            </Container>
          </section>
    )
}

export default EventSection;