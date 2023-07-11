import React, { useState } from "react";
import { listOfBooks } from "../libs/listOfBooks";
import "./booklist.css";
import BookItem from "./BookItem";

const BookList = () => {
  const [books, setBooks] = useState(listOfBooks);
  return (
    <ul className="book-container">
      <h2>List of Books</h2>
      {books.map((book) => (
        <BookItem book={book} />
      ))}
    </ul>
  );
};

export default BookList;
