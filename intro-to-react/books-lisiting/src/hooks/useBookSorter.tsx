import { useMemo, useState } from "react";
import { Book } from "../types/book";

export const useBookSorter = (bookList: Book[]) => {
  const [sortBy, setSortBy] = useState("year");

  const sortedBooks = useMemo(() => {
    switch (sortBy) {
      case "title":
        return [
          ...bookList.sort((a: Book, b: Book) =>
            a.title.localeCompare(b.title)
          ),
        ];

      case "author":
        return [
          ...bookList.sort((a: Book, b: Book) =>
            a.author.localeCompare(b.author)
          ),
        ];

      case "year":
        return [
          ...bookList.sort(
            (a: Book, b: Book) => Number(a.year) - Number(b.year)
          ),
        ];
      default:
        console.log("issue in book sorter");
        return bookList;
    }
  }, [bookList, sortBy]);

  return [setSortBy, sortedBooks] as const;
};
