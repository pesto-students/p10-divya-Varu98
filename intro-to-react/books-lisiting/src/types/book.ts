export type Book = {
  title: string;
  author: string;
  year: number;
};

export interface BookItemProps {
  book: Book;
}
