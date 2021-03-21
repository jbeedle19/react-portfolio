import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <div>
          <About />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;