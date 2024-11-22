import React from 'react';
import { Telephone, GeoAlt, Envelope, Linkedin, Github } from 'react-bootstrap-icons';
import LinkedinPhoto from '../assets/linkedin.jpg';

const Contact = () => (
  <div className="mb-4">
    <h2 className="title-border">Matheus Grecchi Benasse</h2>
    <div className="list p-3 border rounded">
      <img className='photo' src={LinkedinPhoto} alt="Foto do linkedin" />
      <p>
        <Telephone size={18} /> (11) 97679-0731<br />
        <Envelope size={18} /> matheusbenasse@gmail.com<br />
        <Linkedin size={18} /> linkedin.com/in/matheusgrecchibenasse/<br />
        <Github size={18} /> github.com/1Matzh<br />
        <GeoAlt size={18} /> Taboão da Serra, SP
      </p>
    </div>
  </div>
);

export default Contact;
