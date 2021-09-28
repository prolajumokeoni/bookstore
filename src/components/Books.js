import React from 'react';

const Books = () => (

  <div className="pt-5 container">
    <h3>List of books</h3>
    <button className="btn-dark btn-small rounded" type="button">Remove book</button>
    <div className="d-flex pt-5">
      <input type="text" placeholder="Add your book" />
    </div>
  </div>
);

export default Books;
