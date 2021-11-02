import Book from './Book';

const BookList = () => {
  const books = [
    { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'Dune', author: 'Frank Herbert' },
    { id: 3, title: 'Capitalism in the 21th Century', author: 'Suzanne Collins' },
  ];

  return (
    <ul className="list-unstyled row mx-0 g-0 gy-3">
      {books.map((book) => (
        <li key={book.id}>
          <Book title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
