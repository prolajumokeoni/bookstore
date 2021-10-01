import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav border-bottom">
    <li className="nav-item">
      <a href="/" className="nav-link">BOOKSTORE CMS</a>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/" exact>New books</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-muted" to="/categories" exact>Categories</NavLink>
    </li>
  </ul>
);

export default Navbar;
