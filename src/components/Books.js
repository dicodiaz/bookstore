const Books = () => {
  const books = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      <ul className="list-unstyled row mx-0 g-0 gy-3">
        {books.map((book) => (
          <li key={book.id} className="card">
            <div className="row row-cols-auto mx-0 py-4 justify-content-around">
              <div>
                <p>Action</p>
                <p>The Hunger Games</p>
                <p>Suzanne Collins</p>
                <div className="row row-cols-auto mx-0 g-0">
                  <button type="button">Comments</button>
                  <div className="v-line px-0 mx-3" />
                  <button type="button">Remove</button>
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
          </li>
        ))}
      </ul>
      <div className="h-line my-4" />
      <h2>ADD NEW BOOK</h2>
      <form className="row mx-0 g-0 justify-content-between">
        <div className="col-6">
          <input type="text" className="form-control" placeholder="Book title" />
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
    </>
  );
};

export default Books;
