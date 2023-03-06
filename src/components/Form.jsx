import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import useInput from '../hooks/useInput';
import { addBookAsync } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const { value: titleValue, clear: clearTitle, onChange: onTitleChange } = useInput('');
  const { value: authorValue, clear: clearAuthor, onChange: onAuthorChange } = useInput('');
  const { value: categoryValue, onChange: onCategoryChange } = useInput('Action');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: titleValue,
      author: authorValue,
      category: categoryValue,
    };
    dispatch(addBookAsync(newBook));
    clearTitle();
    clearAuthor();
  };

  return (
    <div className="pb-5 pb-md-0">
      <h2 className="h4 fw-bold text-muted">ADD NEW BOOK</h2>
      <form className="row mx-0 g-0 justify-content-between pb-5 pb-md-0">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book title"
            value={titleValue}
            onChange={onTitleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book author"
            value={authorValue}
            onChange={onAuthorChange}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className="col-3 form-select try"
            value={categoryValue}
            onChange={onCategoryChange}
          >
            <option>Action</option>
            <option>Classics</option>
            <option>Graphic Novel</option>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Horror</option>
            <option>Economy</option>
          </select>
        </div>
        <div className="col-md-2 pb-5 pb-md-0">
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
            <span className="font-robotoslab small px-3">ADD BOOK</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
