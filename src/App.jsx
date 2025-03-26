import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import Pathway from './components/Pathway';
import BorderDivider from './components/BorderDivider';
import Upcoming from './components/Upcoming';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import QuickLook from './components/QuickLook';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogsPage from './components/BlogsPage';
import BlogContent from './components/BlogContent'; // Import BlogDetails component
import BlogHeader from './components/BlogHeader'
import BlogFooter from './components/BlogFooter'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <BorderDivider hideOnMobile={false} margin="mt-[-40]" />
              <Features />
              <BorderDivider />
              <Pathway />
              <BorderDivider />
              <Upcoming />
              <BorderDivider />
              <Partners />
              <Testimonials />
              <BorderDivider />
              <QuickLook />
              <BorderDivider />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* Routes for Blogs */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route
        path="/blogs/:id"
        element={
          <>
            <BlogHeader />
            <BlogContent />
            <BlogFooter />
          </>
        }
      />
    </Routes>{/* Dynamic Blog Details */}
    </Router>
  );
}

export default App;
