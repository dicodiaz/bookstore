import { addBooktoAPI, deleteBookFromAPI, getAllBooksFromAPI } from '../../services/queries';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookstore/books/SET_ALL_BOOKS';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOOKS:
      return { books: action.payload };
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export const setAllBooks = (payload) => ({
  type: SET_ALL_BOOKS,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const setAllBooksFromAPI = () => (dispatch) => {
  getAllBooksFromAPI().then((data) => {
    const books = [];
    Object.entries(data).forEach(([id, info]) => {
      const { title: APItitle, category } = info[0];
      const [title, author] = APItitle.split(' - ');
      const newBook = {
        id,
        title,
        category,
        author,
      };
      books.push(newBook);
    });
    dispatch(setAllBooks(books));
  });
};

export const addBookAsync = (book) => (dispatch) => {
  const { id, title, author, category } = book;
  const APIbook = {
    item_id: id,
    category,
    title: `${title} - ${author}`,
  };
  addBooktoAPI(APIbook).then(() => dispatch(addBook(book)));
};

export const removeBookAsync = (id) => (dispatch) => {
  deleteBookFromAPI(id).then(() => dispatch(removeBook(id)));
};
