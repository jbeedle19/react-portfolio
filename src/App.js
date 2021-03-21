import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentNavSection, handleSectionChange] = useState('About Me');

  const renderSection = () => {
    switch (currentNavSection) {
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <ContactForm />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  };

  return (
    <div>
      <Header />
      <Nav
        currentNavSection={currentNavSection}
        handleSectionChange={handleSectionChange}
      ></Nav>
      <main>
        <div>
          {renderSection(currentNavSection)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;