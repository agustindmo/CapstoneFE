import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Main from './Main.js';
import Specials from './Specials.js';
import Footer from './Footer.js';
import Testimonials from './Testimonials';
import Last from './Last';


function Homepage() {
  return (
      <>
        <Nav />
        <Main />
        <Specials />
        <Testimonials />
        <Last />
        <Footer />
      </>
  );
}

export default Homepage;