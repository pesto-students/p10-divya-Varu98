import React, { Component, useEffect } from "react";
import { listOfBooks } from "../libs/listOfBooks";
import "./booklist.css";
import BookItem from "./BookItem";
import { Book } from "../types/book";
import withLogging from "./withLogging";
import { BookFormProps } from "./BookForm";

const BookList = (props: BookFormProps) => {
  const { bookList, setBookList } = props;

  useEffect(() => {
    console.log("delete", bookList);
  }, [bookList]);
  const handleDelete = (title: string) => {
    let updatedBooks = bookList.filter((book) => book.title !== title);
    setBookList([...updatedBooks]);
  };
  return (
    <ul className="book-container">
      <h2>List of Books</h2>
      {bookList.length === 0 && <p>No Books Present, Add Books To Show...</p>}
      {bookList.map((book, index) => (
        <BookItem
          handleDelete={handleDelete}
          setBookList={setBookList}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BookList;
