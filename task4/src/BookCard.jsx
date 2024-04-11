import React from "react";

const BookCard = ({ title, children }) => {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default BookCard;
