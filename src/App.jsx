import React from 'react';
import Resume from './components/Resume';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Language from './components/Language';

const App = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 mb-3 p-5 rounded bg">
        <Contact />
        <Resume />
      </div>
      <div className="col-12 mb-3 p-5 rounded bg">
        <Education />
      </div>
      <div className="col-12 mb-3 p-5 rounded bg">
        <Skills />
      </div>
      <div className="col-12 mb-3 p-5 rounded bg">
        <Certificates />
      </div>
      <div className="col-12 mb-3 p-5 rounded bg">
        <Language />
      </div>
    </div>
  </div>
);

export default App;
