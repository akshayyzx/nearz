import React from 'react';
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

const App = () => {
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
     
      <Partners/>
    
      <Testimonials/>
      <BorderDivider/>
      <QuickLook/>
      <BorderDivider/>
      <ContactSection/>
    </div>
  );
};




export default App
