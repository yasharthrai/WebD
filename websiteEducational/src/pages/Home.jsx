import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import CompanySection from "../components/CompanySection/CompanySection"; 
import AboutUs from "../components/AboutUs/AboutUs";
import Course from "../components/OurCourse/Course";
import ChooseUS from "../components/ChooseUs/ChooseUs";
import EventSection from "../components/Events-Section/Events-Section";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/FooterSection/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CompanySection />
            <AboutUs />
            <Course />
            <ChooseUS />
            <EventSection />
            <Testimonial />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;