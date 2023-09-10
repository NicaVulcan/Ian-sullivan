// import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="wrap-standard" id="column-3">
      <section id='column-3-standard'>
        <Header></Header>
        <div class="spacer">
				<div class="space-sidebar"></div>
				<div class="space-1"></div>
				<div class="space-2"></div>
				<div class="space-3"></div>
				<div class="space-4"></div>
			</div>
        <Main></Main>
      </section>
    </div>
  );
}

export default App;
