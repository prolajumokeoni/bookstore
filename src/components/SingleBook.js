import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-start m-2 shadow">
        <div className="ms-2 me-auto">
          <div className="fw-bolder">{book.title}</div>
          {book.category}
        </div>
        <button type="button" className="btn btn-sm btn-link" onClick={() => dispatch(removeBooks(book.item_id))}>Remove Book</button>
      </li>
    </div>
  );
};
export default SingleBook;
