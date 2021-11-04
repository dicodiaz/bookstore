import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllBooksFromAPI } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);

  useEffect(() => {
    dispatch(setAllBooksFromAPI());
  }, [dispatch]);

  return (
    <ul className="list-unstyled row mx-0 g-0 gy-3">
      {books.map((book) => (
        <li key={book.id}>
          <Book id={book.id} title={book.title} author={book.author} category={book.category} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
