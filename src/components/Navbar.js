import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/Booklists" exact>BOOKSTORE CMS</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/books" exact>New books</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/categories" exact>Categories</NavLink>
    </li>
  </ul>
);

export default Navbar;
