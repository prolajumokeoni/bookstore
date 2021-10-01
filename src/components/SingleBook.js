import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li className="list-group-item m-2 shadow d-flex justify-content-between">
        <div className="">
          <small className="text-muted fw-bold px-3">{book.category}</small>
          <p className="fw-bolder fs-3 px-3">{book.title}</p>
          <p className="text-primary px-3">Book Author</p>
          <div className="d-flex align-items-baseline text-primary px-2">
            <p className="border-right p-2">Comments</p>
            <button
              type="button"
              className="btn btn-small border border-top-0 border-bottom-0 rounded-0 link-primary"
              onClick={() => dispatch(removeBooks(book.item_id))}
            >
              Remove Book
            </button>
            <p className="p-2">Edit</p>
          </div>
        </div>
        <div className="d-flex px-5 mx-5 align-items-center mt-3">
          <div className="progress-circle over50 p69">
            <span>65%</span>
            <div className="left-half-clipper">
              <div className="first50-bar" />
              <div className="value-bar" />
            </div>
          </div>
          <div className="pt-2">
            <p>65%</p>
            <p className="text-muted">Completed</p>
          </div>
        </div>
        <div className="border m-5" />
        <div className="mt-4">
          <p className="text-muted text-nowrap">Current Chapter</p>
          <p>Chapter 17</p>
          <p className="bg-primary rounded px-3 py-2 text-white text-nowrap">
            Update progress
          </p>
        </div>
      </li>
    </div>
  );
};
export default SingleBook;
