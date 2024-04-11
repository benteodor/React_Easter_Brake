import React from "react";
import BookInfo from "./BookInfo";
import "./styles.css";

const App = () => {
  return (
    <div className="books">
      <BookInfo title="The Little Prince" author="Antoine de Saint-Exupéry" />
      <BookInfo title="Another Book Title" author="Another Author" />
    </div>
  );
};

export default App;

