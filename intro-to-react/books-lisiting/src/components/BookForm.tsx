import { Box, Button, TextField } from "@mui/material";
import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Book } from "../types/book";

export interface BookFormProps {
  bookList: Book[];
  setBookList: Dispatch<SetStateAction<Book[]>>;
}

const BookForm = (props: BookFormProps) => {
  const { setBookList } = props;
  const [bookinfo, setBookinfo] = useState<Book>({
    author: "",
    title: "",
    year: "",
  });

  const handleBookinfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookinfo((prev) => ({ ...prev, [name]: value }));
    console.log(bookinfo);
  };

  const submitBook = (e: any) => {
    e.preventDefault();
    setBookList((booksPresent) => [...booksPresent, bookinfo]);
  };

  return (
    <form onSubmit={submitBook}>
      <TextField
        name="title"
        onChange={handleBookinfo}
        id="standard-basic"
        label="Title"
        variant="standard"
      />
      <TextField
        name="author"
        onChange={handleBookinfo}
        id="standard-basic"
        label="Author"
        variant="standard"
      />
      <TextField
        name="year"
        onChange={handleBookinfo}
        id="standard-basic"
        label="Year of the book"
        variant="standard"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BookForm;
