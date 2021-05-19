import React from 'react';
import './App.css';

import Menu from './components/Menu';
import SandboxArea from './components/SandboxArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="sandbox-container" style={{height: '100%'}}>
        <SandboxArea />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
