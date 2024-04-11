import React from "react";
import BookCard from "./BookCard";
import "./styles.css";

const App = () => {
  return (
    <div className="books">
      <BookCard title="The Art of Programming">
        An insightful journey through the world of programming, exploring both
        theory and practical applications.
        <button>Read More</button>
      </BookCard>
    </div>
  );
};

export default App;