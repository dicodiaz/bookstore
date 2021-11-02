import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer.books);

  return (
    <ul className="list-unstyled row mx-0 g-0 gy-3">
      {books.map((book) => (
        <li key={book.id}>
          <Book id={book.id} title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
