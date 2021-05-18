import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu';
import SandboxArea from './components/SandboxArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{height: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <Menu />
      <div style={{height: '100%'}}>
        <SandboxArea />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
