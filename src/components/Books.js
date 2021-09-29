import React from 'react';
import { useSelector } from 'react-redux';
import Addbooks from './Addbooks';
import SingleBook from './SingleBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="pt-5 container">
      <h3>List of books</h3>
      <ul className="list-group">
        {books.length > 0 ? books.map((book) => <SingleBook key={book.id} book={book} />)
          : 'No Books'}
      </ul>
      <Addbooks />
    </div>
  );
};

export default Books;
