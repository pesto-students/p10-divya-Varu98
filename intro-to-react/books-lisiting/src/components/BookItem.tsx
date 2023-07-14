import { PureComponent } from "react";
import { BookItemProps } from "../types/book";

class BookItem extends PureComponent<BookItemProps> {
  render() {
    const { book } = this.props;
    return (
      <li className="book-item">
        <p className="book-year">{book.year}</p>
        <h3 className="book-title">{book.title}</h3>
        <p>{book.author}</p>
      </li>
    );
  }
}
export default BookItem;
