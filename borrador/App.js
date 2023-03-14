import React from 'react';
import './App.css';
import Nav from '../src/Nav.js';
import Main from '../src/Main.js';
import Specials from '../src/Specials.js';
import Footer from '../src/Footer.js';
import Testimonials from '../src/Testimonials';
import Last from '../src/Last';


function App() {
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

export default App;
