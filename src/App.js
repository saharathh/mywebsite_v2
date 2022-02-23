import React from 'react';
import { Navbar } from './components/index';
import { Expertise, Tool, Project, About } from './containers/index';

function App() {
  return (
    <div>
      <Navbar />
      <Expertise />
      <Project />
      <About />
      <Tool />
    </div>
  );
}

export default App;
