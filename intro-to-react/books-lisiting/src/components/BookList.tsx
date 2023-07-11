import React, { Component,  } from "react";
import { listOfBooks } from "../libs/listOfBooks";
import "./booklist.css";
import BookItem from "./BookItem";
import { Book } from "../types/book";

interface BookListState {
  books: Book[];
}
class BookList extends Component<any, BookListState> {
  constructor(props: any) {
    super(props);
    this.state = { books: listOfBooks };
  }
  render() {
    return (
      <ul className="book-container">
        <h2>List of Books</h2>
        {this.state.books.map((book: Book) => (
          <BookItem book={book} />
        ))}
      </ul>
    );
  }
}

export default BookList;
