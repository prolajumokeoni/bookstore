import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const Booklists = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h3>List of books</h3>
      <ul className="list-group">
        {books.length > 0 ? books.map((book) => <SingleBook key={book.id} book={book} />)
          : 'No Books'}
      </ul>
    </div>
  );
};

export default Booklists;
