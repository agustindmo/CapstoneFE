import React, { useReducer } from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Specials from './Specials.js';
import Footer from './Footer.js';
import Testimonials from './Testimonials';
import Last from './Last';


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
