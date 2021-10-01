import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li className="list-group-item m-2 shadow d-flex justify-content-between">
        <div className="">
          <p className="text-muted">{book.category}</p>
          <div className="fw-bolder fs-3">{book.title}</div>
          <button type="button" className="btn btn-sm btn-link " onClick={() => dispatch(removeBooks(book.item_id))}>Remove Book</button>
        </div>
        <div className="d-flex">
          <div className="Oval-2" />
          <div className="pt-2">
            <p>65%</p>
            <p className="text-muted">Completed</p>
          </div>
        </div>
        <div>
          <p className="text-muted">Current Chapter</p>
          <p>Chapter 17</p>
          <p className="bg-primary rounded px-3 py-2 text-white">Update progress</p>
        </div>
      </li>
    </div>
  );
};
export default SingleBook;
