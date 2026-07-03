import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import WhyChooseUs from '../components/why/WhyChooseUs';
import Testimonials from '../components/testimonials/Testimonials';
import Clients from '../components/clients/Clients';
import Contact from '../components/contact/Contact';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="flex flex-col min-h-screen"
    >
      <Navbar />
      <main className="flex-grow">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="why"><WhyChooseUs /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="clients"><Clients /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
