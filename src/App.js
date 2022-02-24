import React from 'react';
import { Navbar } from './components/index';
import { Expertise, Hero, Tool, Project, About, CTA } from './containers/index';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <Project />
      <About />
      <Tool />
      <CTA />
    </div>
  )
};

export default App;
