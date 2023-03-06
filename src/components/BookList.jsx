import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllBooksFromAPI } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);

  useEffect(() => {
    dispatch(setAllBooksFromAPI());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="list-unstyled row mx-0 g-0 gy-3">
      {books.map((book) => {
        const { id, title, author, category } = book;
        const actualChapter = Math.floor(Math.random() * 11);
        const totalChapters = Math.floor(Math.random() * 11 + actualChapter);
        return (
          <li key={id}>
            <Book
              id={id}
              title={title}
              author={author}
              category={category}
              actualChapter={actualChapter}
              totalChapters={totalChapters}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
