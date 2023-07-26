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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import ThemeSwitcher from "./ThemeSwitcher";
import { useBookSorter } from "../hooks/useBookSorter";

const BookList = (props: BookFormProps) => {
  const { bookList, setBookList } = props;
  const { handleSearch, filteredBooks } = useBookFilter(bookList);
  const [setSortBy, sortedBooks] = useBookSorter(filteredBooks);

  const handleDelete = (title: string) => {
    let updatedBooks = bookList.filter((book) => book.title !== title);
    setBookList([...updatedBooks]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e);
  };

  const handleSelect = (e: any) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      {/* <ul className="book-container"> */}
      <TableContainer sx={{ maxWidth: "60vw", marginInline: "auto" }}>
        <ThemeSwitcher />
        <h2>List of Books</h2>
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TextField
            variant="standard"
            type="search"
            placeholder="Search For Books"
            onChange={handleInputChange}
          />
          <FormControl sx={{ width: "10rem" }}>
            <InputLabel>Sort Books By :</InputLabel>
            <Select label={"Sort Books By : "} onChange={handleSelect}>
              <MenuItem value={"title"}>By Title</MenuItem>
              <MenuItem value={"author"}>By Author</MenuItem>
              <MenuItem value={"year"}>By Year</MenuItem>
            </Select>
          </FormControl>
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
            {sortedBooks.map((book, index) => (
              <BookItem
                handleDelete={handleDelete}
                setBookList={setBookList}
                book={book}
              />
            ))}
          </TableBody>
        </Table>
        {sortedBooks.length === 0 && (
          <p>No Books Present, Add Books To Show...</p>
        )}
      </TableContainer>
    </>
  );
};

export default BookList;
