import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const Book = ({ id, title, author, category, actualChapter, totalChapters }) => {
  const dispatch = useDispatch();
  const progressPercentage = Math.round((actualChapter / totalChapters) * 100);

  const handleRemove = () => dispatch(removeBookAsync(id));

  return (
    <div className="card pe-5">
      <div className="row mx-0 py-4 justify-content-between align-items-center ps-4 pe-5 text-custom2">
        <div className="col-md-6">
          <p className="fw-bold opacity-50 mb-0">{category}</p>
          <p className="fw-bold font-robotoslab fs-2 mb-0">{title}</p>
          <button type="button" className="link-primary border-0 bg-white p-0 mb-3">
            {author}
          </button>
          <div className="row row-cols-auto mx-0 g-0">
            <button type="button" className="link-primary border-0 bg-white">
              Comments
            </button>
            <div className="v-line px-0 mx-3" />
            <button type="button" className="link-primary border-0 bg-white" onClick={handleRemove}>
              Remove
            </button>
            <div className="v-line px-0 mx-3" />
            <button type="button" className="link-primary border-0 bg-white">
              Edit
            </button>
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          <div className="row row-cols-auto mx-0 g-0 justify-content-center align-items-center py-3 py-md-0">
            <div className="col-2 col-md-5">
              <CircularProgress className="w-75" variant="determinate" value={progressPercentage} />
            </div>
            <div className="col-7">
              <p className="fs-2 mb-0">{progressPercentage}%</p>
              <p className="text-custom3 opacity-50 small mb-2">Completed</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 font-robotoslab">
          <p className="mb-2 opacity-50">CURRENT CHAPTER</p>
          <p>Chapter {actualChapter}</p>
          <button type="button" className="btn btn-primary px-3">
            <span className="opacity-50 small">UPDATE PROGRESS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  actualChapter: PropTypes.number.isRequired,
  totalChapters: PropTypes.number.isRequired,
};

export default Book;
