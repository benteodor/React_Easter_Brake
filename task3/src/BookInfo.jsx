import React from "react";

const BookInfo = ({ title, author }) => {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default BookInfo;
