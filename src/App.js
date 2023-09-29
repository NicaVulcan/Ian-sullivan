import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  //arr of nav links
  const [navLinks] = useState([
    "About",
    "Projects",
    "Resume"
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
        <div class="spacer">
          <div class="space-sidebar"></div>
          <div class="space-1"></div>
          <div class="space-2"></div>
          <div class="space-3"></div>
          <div class="space-4"></div>
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
