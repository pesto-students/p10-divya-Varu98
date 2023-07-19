import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import { Book } from "./types/book";

function App() {
  const [bookList, setBookList] = useState<Book[]>([]);
  return (
    <div className="App">
      {/* <BookList /> */}
      <BookForm bookList={bookList} setBookList={setBookList} />
    </div>
  );
}

export default App;
