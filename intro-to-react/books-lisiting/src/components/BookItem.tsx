import { BookItemProps } from "../types/book";

const BookItem = ({ book }: BookItemProps) => {
  return (
    <li className="book-item">
      <p className="book-year">{book.year}</p>
      <h3 className="book-title">{book.title}</h3>
      <p>{book.author}</p>
    </li>
  );
};

export default BookItem;
