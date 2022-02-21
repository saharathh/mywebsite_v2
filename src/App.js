import React from 'react';
import { Navbar, CustomizedIconComponent } from './components/index';
import { Expertise, Tool } from './containers/index';

function App() {
  return (
    <div>
      <Navbar />
      <Expertise />
      <CustomizedIconComponent />
    </div>
  );
}

export default App;
