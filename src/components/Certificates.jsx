import React from 'react';

const Certificates = () => (
  <div className="mb-4">
    <h2 className="title-border">Certificados</h2>
    <ul className="d-flex list-unstyled">
      <li className="mb-3 p-3 border rounded flex-fill">
        <strong>Danki Code</strong><br />
        Curso de Python Completo
      </li>
      <li className="ms-3 mb-3 p-3 border rounded flex-fill">
        <strong>Udemy</strong><br />
        Aprendendo a programar em C++
      </li>
      <li className="ms-3 mb-3 p-3 border rounded flex-fill">
        <strong>Amazon Web Services (AWS)</strong><br />
        AWS Academy Graduate - AWS Academy Cloud Foundations
      </li>
    </ul>

    <ul className="d-flex list list-unstyled">
      <li className="mb-3 p-3 border rounded flex-fill">
        <strong>Cisco</strong><br />
        Cybersecurity Essentials<br />
        Introduction to Cybersecurity<br />
        Introduction to IoT
      </li>
    </ul>
  </div>
);

export default Certificates;
