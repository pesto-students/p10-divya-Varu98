import { PureComponent } from "react";
import { BookDetailProps, BookItemProps } from "../types/book";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";

const BookItem = (props: BookDetailProps) => {
  const { book, setBookList, handleDelete } = props;
 
  return (
    <li className="book-item">
      <p className="book-year">{book.year}</p>
      <h3 className="book-title">{book.title}</h3>
      <p>{book.author}</p>
      <Button onClick={()=>{handleDelete(book.title)}}>
        <Delete sx={{ color: "red" }} />
      </Button>
    </li>
  );
};

export default BookItem;
