import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Courses from './components/Courses/Courses';
import Languages from './components/Languages/Languages';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Courses />
        <Languages />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;