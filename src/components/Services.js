// src/components/Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service">
          <h3>Service 1</h3>
          <p>Description of service 1.</p>
        </div>
        <div className="service">
          <h3>Service 2</h3>
          <p>Description of service 2.</p>
        </div>
        <div className="service">
          <h3>Service 3</h3>
          <p>Description of service 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
