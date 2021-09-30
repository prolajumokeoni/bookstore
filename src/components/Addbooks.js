import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../redux/books/books';

const Addbooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const addNewBook = (e) => {
    if (title && category) {
      e.preventDefault();
      const data = {
        title,
        category,
        item_id: books.length + 1,
      };
      dispatch(addBooks(data));
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div>
      <form>
        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="book title" />
        <input className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category" />
        <button onClick={addNewBook} type="button">Submit</button>
      </form>
    </div>
  );
};

export default Addbooks;
