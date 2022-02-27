import React from 'react';
import { Navbar } from './components/index';
import { Expertise, Hero, Tool, Project, About } from './containers/index';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Expertise />
      <Project />
      <About />
      <Tool />
    </div>
  )
};

export default App;