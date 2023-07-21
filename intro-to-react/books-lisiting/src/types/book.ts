import { Dispatch, SetStateAction } from "react";

export type Book = {
  author: string;
  title: string;
  year: number | string;
};

export interface BookItemProps {
  book: Book;
  setBookList: Dispatch<SetStateAction<Book[]>>;
}

export interface BookDetailProps {
  book: Book;
  setBookList: Dispatch<SetStateAction<Book[]>>;
  handleDelete: (title: string) => void;
}

export interface BookListState {
  books: Book[];
}

export interface BookLoaderProps {
  bookList: Book[];
  setBookList: Dispatch<SetStateAction<Book[]>>;
}
export interface useBookFilterProps {
  bookList: Book[] | [];
}
