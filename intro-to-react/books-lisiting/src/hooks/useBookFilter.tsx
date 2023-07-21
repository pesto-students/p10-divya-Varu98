import { ChangeEvent, useMemo, useState } from "react";
import { Book } from "../types/book";

export const useBookFilter = (bookList: Book[]) => {
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    if (!search.trim()) {
      return bookList;
    }

    const lowercaseSearch = search.toLowerCase();
    return bookList.filter((book: Book) =>
      book.title.toLowerCase().includes(lowercaseSearch)
    );
  }, [search, bookList]); // Memoize based on the search term and the book list

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  return { filteredBooks, handleSearch };
};
