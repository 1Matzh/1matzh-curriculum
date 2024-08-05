import React from 'react';

const Job = () => (
  <div className="mb-4">
    <h2 className="title-border">Cargo</h2>
    <div className="list p-3 border rounded">
    <span className="div-list border-start-0"></span>
      <strong>Cargos Desejados</strong>
      <span className="div-list"></span>
      <ul className="list-unstyled">
        <li>Desenvolvedor Front End</li>
        <li>Desenvolvedor Back End</li>
      </ul>
      <span className="div-list border-start-0"></span>
    </div>
    <div className="list p-3 border rounded">
    <span className="div-list border-start-0"></span>
      <strong>Pretensão Salarial</strong>
      <span className="div-list"></span>
      <ul className="list-unstyled">
        <li>A combinar</li>
      </ul>
      <span className="div-list border-start-0"></span>
    </div>
  </div>
);

export default Job;
