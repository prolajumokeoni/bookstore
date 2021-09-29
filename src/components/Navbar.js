import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/" exact>Books</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/books" exact>Books</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/categories" exact>Categories</NavLink>
    </li>
  </ul>
);

export default Navbar;
