import { PureComponent, useState } from "react";
import { BookDetailProps, BookItemProps } from "../types/book";
import { Delete } from "@mui/icons-material";
import { Box, Button, TableCell, TableRow } from "@mui/material";

const BookItem = (props: BookDetailProps) => {
  const { book, setBookList, handleDelete } = props;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <TableRow key={book.title} className="book-item">
      <TableCell>
        <p className="book-year">{book.year}</p>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h3 className="book-title">{book.title}</h3>
          {showDescription && (
            <p>
              "Lost in Time: A gripping tale of love, adventure, and a
              mysterious pocket watch. When Emma discovers a portal to the past,
              she must navigate treacherous landscapes and confront her deepest
              fears to unravel the secrets that lie within the ticking hands of
              time."
            </p>
          )}
        </Box>
      </TableCell>
      <TableCell>
        <p>{book.author}</p>
      </TableCell>
      <TableCell>
        {showDescription ? (
          <Button
            onClick={() => {
              setShowDescription(!showDescription);
            }}
            sx={{ minWidth: "fit-content" }}
          >
            Hide
          </Button>
        ) : (
          <Button
            onClick={() => {
              setShowDescription(!showDescription);
            }}
            sx={{ minWidth: "fit-content" }}
          >
            Read More...
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          onClick={() => {
            handleDelete(book.title);
          }}
        >
          <Delete sx={{ color: "red" }} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BookItem;
