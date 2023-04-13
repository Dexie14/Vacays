import React from 'react';
import Header from "../../Component/Header/Header";
import Hero from "../../Component/Hero/Hero";
import Destinations from "../../Component/Destinations/Destinations";
import WhyChooseUs from "../../Component/WhyChooseUs/WhyChooseUs";
import CustomArrows from "../../Component/Testimony/Testimony";
import Subscribe from "../../Component/Subscribe/Subscribe";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Destinations />
        <WhyChooseUs />
        <CustomArrows />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home