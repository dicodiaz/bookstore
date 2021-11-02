import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));

  return (
    <div className="card">
      <div className="row row-cols-auto mx-0 py-4 justify-content-around">
        <div>
          <p>Action</p>
          <p>{title}</p>
          <p>{author}</p>
          <div className="row row-cols-auto mx-0 g-0">
            <button type="button">Comments</button>
            <div className="v-line px-0 mx-3" />
            <button type="button" onClick={handleRemove}>
              Remove
            </button>
            <div className="v-line px-0 mx-3" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div>
          <div className="row row-cols-auto mx-0">
            <div className="Oval-2" />
            <div>
              <p>64%</p>
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div className="v-line px-0" />
        <div>
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
