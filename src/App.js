import React from 'react';
import Shell from './components/Shell/Shell';
import Navigation from './components/Navigation/Navigation';
import Dock from './components/Dock/Dock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="desktopContainer">
        <Shell />
      </div>
      <Dock />
    </div>
  );
}

export default App;
