import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../redux/books/books';

const Addbooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const addNewBook = (e) => {
    if (title && author) {
      e.preventDefault();
      const data = {
        title,
        author,
        id: books.length + 1,
      };
      dispatch(addBooks(data));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <form>
        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="book title" />
        <input className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
        <button onClick={addNewBook} type="button">Submit</button>
      </form>
    </div>
  );
};

export default Addbooks;
