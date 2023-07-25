import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import { Book } from "./types/book";
import { listOfBooks } from "./libs/listOfBooks";
import { Box } from "@mui/material";
import BookDataLoader from "./components/BookDataLoader";
import { ThemeContextType, useTheme } from "./context/ThemeContext";

function App() {
  const [bookList, setBookList] = useState<[] | Book[]>([]);
  const { theme, setTheme } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: theme === "light" ? "whitesmoke" : "black",
        backgroundColor: theme === "light" ? "gray" : "white",
      }}
      className="App"
    >
      <BookDataLoader bookList={bookList} setBookList={setBookList} />
      <BookForm bookList={bookList} setBookList={setBookList} />
      <BookList bookList={bookList} setBookList={setBookList} />
    </Box>
  );
}

export default App;
