import React, { ChangeEvent, Component, useEffect } from "react";
import { listOfBooks } from "../libs/listOfBooks";
import "./booklist.css";
import BookItem from "./BookItem";
import { Book } from "../types/book";
import withLogging from "./withLogging";
import { BookFormProps } from "./BookForm";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useBookFilter } from "../hooks/useBookFilter";

const BookList = (props: BookFormProps) => {
  const { bookList, setBookList } = props;
  const { handleSearch, filteredBooks } = useBookFilter(bookList);
  const handleDelete = (title: string) => {
    let updatedBooks = bookList.filter((book) => book.title !== title);
    setBookList([...updatedBooks]);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e);
  };
  return (
    <>
      {/* <ul className="book-container"> */}
      <TableContainer sx={{ maxWidth: "60vw", marginInline: "auto" }}>
        <h2>List of Books</h2>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            variant="standard"
            type="search"
            placeholder="Search For Books"
            onChange={handleInputChange}
          />
        </Box>
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
            {filteredBooks.map((book, index) => (
              <BookItem
                handleDelete={handleDelete}
                setBookList={setBookList}
                book={book}
              />
            ))}
          </TableBody>
        </Table>
        {filteredBooks.length === 0 && (
          <p>No Books Present, Add Books To Show...</p>
        )}
      </TableContainer>
    </>
  );
};

export default BookList;
