import React from "react";
import './course.css'; 
import  {Container, Row, Col} from 'reactstrap';
import courseImg1 from '../../assests/web-design.jpg';
import courseImg2 from '../../assests/photography.jpg';
import courseImg3 from '../../assests/marketing.jpg';
import CourseCard from "./CourseCard";

const coursesData = [
    {
      id: "01",
      title: "How to Learn Basic Web Design HTML",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Learn Photography and Video Editing Basic",
      lesson: 12,
      students: 12,
      rating: 3,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "Learn How to Manage Marketing Strategy",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg3,
    },
  ];

const Course = () => {
    return (
          <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                        <div className="course__top__left w-100">
                            <h2>Top Featured Courses</h2>
                            <p>Best Solutions For Life</p>
                        </div>
                        </div>
                    </Col>

                    {coursesData.map((item) => (
                        <Col lg='4' md='6' sm='6'>
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}

                </Row>
            </Container>
          </section>
    )
}

export default Course;