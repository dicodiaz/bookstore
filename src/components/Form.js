const Form = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form className="row mx-0 g-0 justify-content-between">
      <div className="col-3">
        <input type="text" className="form-control" placeholder="Book title" required />
      </div>
      <div className="col-3">
        <input type="text" className="form-control" placeholder="Book author" required />
      </div>
      <div className="col-3">
        <select className="col-3 form-select">
          <option selected>Category</option>
        </select>
      </div>
      <button type="submit" className="col-2">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
