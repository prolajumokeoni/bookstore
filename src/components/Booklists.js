import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from './SingleBook';
import fetchBooks from '../redux/apiCalls';
import { setBooks } from '../redux/books/books';

const Booklists = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    const books = await fetchBooks();
    dispatch(setBooks(books));
  }, []);
  const books = useSelector((state) => state.books);
  return (
    <div className="p-2">
      <ul className="list-group">
        {books.length > 0 ? books.map((book) => <SingleBook key={book.item_id} book={book} />)
          : 'No Books'}
      </ul>
    </div>
  );
};

export default Booklists;
