export type Book = {
  title: string;
  author: string;
  year: number;
};

export interface BookItemProps {
  book: Book;
}

export interface BookDetailProps {
  book : Book
}

export interface BookListState {
books : Book[]
}