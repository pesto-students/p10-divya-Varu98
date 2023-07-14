import React from "react";
import { BookDetailProps } from "../types/book";

const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.year}</p>
    </div>
  );
};

export default BookDetail;
