import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Tiger from './components/Tiger';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Tiger />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
