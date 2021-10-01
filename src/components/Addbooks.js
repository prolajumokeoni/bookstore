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
    <div className="row px-5 pb-5 mx-5">
      <h4 className="text-muted fw-bold my-3">Add new book</h4>
      <form>
        <div className="d-flex row">
          <div className="col-xl-6 col-md-5 col-sm-5">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="book title"
            />
          </div>
          <div className="col-xl-4 col-md-5 col-sm-5">
            <input
              type="text"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="category"
            />
          </div>
          <div className="col-xl-2 col-md-2 col-sm-2">
            <button onClick={addNewBook} type="button" className="btn btn-small btn-primary text-nowrap">
              ADD BOOKS
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addbooks;
