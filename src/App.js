import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  //arr of nav links
  const [navLinks] = useState([
    "About",
    "Projects",
    // "Resume"
  ]);
  //set current display based on nav link selection
  const [currentDisplay, setCurrentDisplay] = useState(navLinks[0]);

  return (
    <div className="wrap-standard" id="column-3">
      <section id='column-3-standard'>
        {/* pass navLinks, currentDisplay, and setCurrentDisplay as props */}
        <Header
          navLinks={navLinks}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        ></Header>
        <div className="spacer">
          <div className="space-sidebar"></div>
          <div className="space-1"></div>
          <div className="space-2"></div>
          <div className="space-3"></div>
          <div className="space-4"></div>
        </div>
        {/* pass currentDisplay as prop */}
        <Main
          currentDisplay={currentDisplay}
        ></Main>
        
      </section>
    </div>
  );
}

export default App;
