import React from 'react';
import { Navbar } from './components/index';
import { Expertise, Hero, Tool, Project, About, CTA } from './containers/index';
import { Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div className="app">
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