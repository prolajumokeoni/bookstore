import React from 'react';
import Addbooks from './Addbooks';
import Booklists from './Booklists';

const Books = () => (
  <div className="pt-5 container">
    <Booklists />
    <Addbooks />
  </div>
);

export default Books;
