import { BookItemProps } from "../types/book";

const BookItem = ({ book }: BookItemProps) => {
  return (
    <li className="book-item">
      <span className="book-year">{book.year}</span>
      <span className="book-title">{book.title}</span>
      <span>{book.author}</span>
    </li>
  );
};

export default BookItem;
