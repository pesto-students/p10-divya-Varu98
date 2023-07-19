export type Book = {
  author: string;
  title: string;
  year: number | string;
};

export interface BookItemProps {
  book: Book;
}

export interface BookDetailProps {
  book: Book;
}

export interface BookListState {
  books: Book[];
}
