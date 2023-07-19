import React, { Component, useEffect } from "react";
import { listOfBooks } from "../libs/listOfBooks";
import "./booklist.css";
import BookItem from "./BookItem";
import { Book } from "../types/book";
import withLogging from "./withLogging";
import { BookFormProps } from "./BookForm";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

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
    <>
      {/* <ul className="book-container"> */}
      <TableContainer sx={{ maxWidth: "60vw", marginInline: "auto" }}>
        <h2>List of Books</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Show Description</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookList.map((book, index) => (
              <BookItem
                handleDelete={handleDelete}
                setBookList={setBookList}
                book={book}
              />
            ))}
          </TableBody>
        </Table>
        {bookList.length === 0 && <p>No Books Present, Add Books To Show...</p>}
      </TableContainer>
    </>
  );
};

export default BookList;
