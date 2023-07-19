import React, { useState } from "react";
import { BookDetailProps } from "../types/book";

const BookDetail = ({ book }: BookDetailProps) => {
  const [showDescription, setShowDescription] = useState();
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.year}</p>
    </div>
  );
};

export default BookDetail;
