import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <div>
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;