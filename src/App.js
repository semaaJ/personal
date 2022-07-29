import React, { useState } from 'react';

import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import './App.css';

const THEMES = [{
  primaryDark: '#ff3855',
  background: '#1d1d1d',
  text: '#F3F4F6',
}, {
  primaryDark: '#6A98F0',
  background: '#2A363B',
  text: '#F3F4F6',
}, {
  primaryDark: 'white',
  background: 'black',
  text: 'white',
}, {
  primaryDark: '#eb5c14',
  background: '#355C7D',
  text: '#F3F4F6',
}, {
  primaryDark: '#26d3ec',
  background: '#1d1d1d',
  text: '#F3F4F6',
}];

function App() {
  const [state, setState] = useState({ colour: THEMES[THEMES.length - 1], tab: 0 });
  
  const tabs = [
    <Home state={state} setState={setState} />, 
    <Experience state={state} setState={setState} />,
    <Projects state={state} setState={setState} />
  ];

  return (
    <div className="App">
      <div className="container d-f fd-c">  
        <Nav state={state} setState={setState} />
        { tabs[state.tab] }
      </div>
    </div>
  );
}

export default App;
