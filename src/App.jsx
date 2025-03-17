import React ,{useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero' ;
import Features from './components/Feature';
import Pathway from './components/Pathway';
import BorderDivider from './components/BorderDivider';
import Upcoming from './components/Upcoming'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners';
import QuickLook from './components/QuickLook'
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'



function App() {
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0); // Scroll to top AFTER everything loads
    };

    window.onload = handleLoad; // Ensure it triggers only after full page load

    return () => {
      window.onload = null; // Cleanup to avoid conflicts
    };
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <BorderDivider/>
      <Features/>
      <BorderDivider/>
      <Pathway/>
      <BorderDivider/>
      <Upcoming/>
      <BorderDivider/>
     
      <Partners/>
  
    
      <Testimonials/>
      <BorderDivider/>
      <QuickLook/>
      <BorderDivider/>
      <ContactSection/>
      
      <Footer/>
    </div>
  );
};




export default App
