import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import useInputHook from '../hooks/inputHook';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const { value: titleValue, reset: titleReset, onChange: titleOnChange } = useInputHook('');
  const { value: authorValue, reset: authorReset, onChange: authorOnChange } = useInputHook('');

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: titleValue,
      author: authorValue,
    };
    dispatch(addBook(newBook));
    titleReset();
    authorReset();
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form className="row mx-0 g-0 justify-content-between">
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book title"
            value={titleValue}
            onChange={titleOnChange}
            required
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book author"
            value={authorValue}
            onChange={authorOnChange}
            required
          />
        </div>
        <div className="col-3">
          <select className="col-3 form-select" defaultValue="Category">
            <option>Category</option>
          </select>
        </div>
        <button type="submit" className="col-2" onClick={submitBookToStore}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
