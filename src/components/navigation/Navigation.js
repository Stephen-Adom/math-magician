import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 py-lg-4">
    <div className="container">
      <Link className="navbar-brand" to="/">Math Magician</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="quote">Quote</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
