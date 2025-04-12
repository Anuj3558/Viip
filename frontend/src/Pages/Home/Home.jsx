import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import IPRights from "./components/IPRights";
import WhyChooseUs from "./components/WhyChooseUs";
import ExpertTeam from "./components/ExpertTeam";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TrendingEventOverlay from "./components/TrendingEventOverlay";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Vastav Intellect IP Solutions - Leading Patent & IP Law Firm in India
        </title>
        <meta
          name="description"
          content="Established in 2019, Vastav Intellect IP Solutions LLP (formerly AV IP Solution) is a professionally managed legal and business consultancy firm headquartered in Delhi, India. While our roots lie in intellectual property, we’ve grown into a one-stop destination for startups, corporates, NGOs, and professionals seeking seamless support in business setup, legal compliance, licensing, certification, fundraising, registrations, and personal legal matters. With a client-first approach and a track record of excellence, VIIPS stands as a trusted partner for organizations at every stage of growth—from ideation to expansion."
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
      <Hero />
      <Services />
      <AboutUs />
      <IPRights />
      <WhyChooseUs />
      <ExpertTeam />
    </>
  );
};

export default Home;
