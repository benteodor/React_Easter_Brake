import { useState } from "react";
import { books } from "./books.js";
import Book from "./Book";

const BookList = () => {
  const [activeBookId, setActiveBookId] = useState(null);

  const visibilityHandler = (id) => {
    setActiveBookId(activeBookId === id ? null : id);
  };

  if (books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <section className="card-grid">
      {books.map((book) => (
        <Book
          key={book.id}
          {...book}
          showDescription={book.id === activeBookId}
          visibilityHandler={() => visibilityHandler(book.id)}
        />
      ))}
    </section>
  );
};

export default BookList;
