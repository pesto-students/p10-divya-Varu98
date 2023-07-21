import React, { useEffect, useState } from "react";
import { BookLoaderProps } from "../types/book";
import { listOfBooks } from "../libs/listOfBooks";

const BookDataLoader = ({ bookList, setBookList }: BookLoaderProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoading(false);
        setBookList(listOfBooks);
      }, 2000);
    };
    fakeDataFetch();
  }, []);

  return loading ? <p>loading...</p> : <div>BookDataLoader</div>;
};

export default BookDataLoader;
