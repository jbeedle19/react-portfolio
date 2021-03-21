import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <div>
          <About />
          <Portfolio />
          <Resume />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;