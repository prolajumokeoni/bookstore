import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav">
    <li className="nav-item">
      <Link to="/" className="nav-link  fs-4 fw-bolder">BookStore CMS</Link>
    </li>
    <li className="nav-item">
      <Link to="/books" className="nav-link fs-4 fw-bolder">BOOKS</Link>
    </li>
    <li className="nav-item">
      <Link to="/categories" className="nav-link fs-4 fw-bolder">CATEGORIES</Link>
    </li>
  </ul>
);

export default Navbar;
