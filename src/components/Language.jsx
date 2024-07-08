import React from 'react';

const Language = () => (
  <div className="mb-4">
    <h2 className="title-border">Idiomas</h2>
    <ul className="d-flex list-unstyled">
      <li className="mb-3 p-3 d-flex flex-column">
        <strong className='text-uppercase'>Inglês</strong>
        <div className="pbm">
          <span className="pb pb-active"/>
          <span className="pb pb-active"/>
          <span className="pb"/>
          <span className="pb"/>
          <span className="pb"/>
          <span className="pb me-0"/>
        </div>
        <div className="d-flex justify-content-between">
          <small>Básico</small>
          <small>A2</small>
        </div>
      </li>
    </ul>
  </div>
);

export default Language;
