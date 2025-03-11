import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
// import Services from "../components/Services";
// import AboutUs from "../components/AboutUs";
// import IPRights from "../components/IPRights";
// import WhyChooseUs from "../components/WhyChooseUs";
// import ExpertTeam from "../components/ExpertTeam";
// import Testimonials from "../components/Testimonials";
// import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Vastav Intellect IP Solutions - Leading Patent & IP Law Firm in India
        </title>
        <meta
          name="description"
          content="Premier intellectual property law firm in India offering comprehensive patent, trademark, and IP solutions. Expert legal services for protecting your innovations and intellectual property rights."
        />
        <meta
          name="keywords"
          content="patent filing, trademark registration, IP solutions, intellectual property law, India"
        />
        <meta name="author" content="Vastav Intellect IP Solutions" />
        <meta
          property="og:title"
          content="Vastav Intellect IP Solutions - Leading Patent & IP Law Firm in India"
        />
        <meta
          property="og:description"
          content="Premier intellectual property law firm in India offering comprehensive patent, trademark, and IP solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vastavintellect.com" />
        <meta
          property="og:image"
          content="https://www.vastavintellect.com/logo.png"
        />
      </Helmet>

      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <IPRights />
      <WhyChooseUs />
      <ExpertTeam />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
