import React from 'react';
import { Navbar } from './components/index';
import { Expertise, Tool } from './containers/index';

function App() {
  return (
    <div>
      <Navbar />
      <Expertise />
      <Tool />
    </div>
  );
}

export default App;
