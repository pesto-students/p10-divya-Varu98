import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { Book, useBookFilterProps } from "../types/book";

export const useBookFilter = (bookList: Book[]) => {
  const [filteredBooks, setFilteredBooks] = useState<[] | Book[]>(bookList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateBooksBasedOnSearch(search);
  }, [search]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const updateBooksBasedOnSearch = (search: string) => {
    let updatedBooks = bookList.filter((book: Book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(updatedBooks);
  };

  return {filteredBooks, handleSearch} 
};
