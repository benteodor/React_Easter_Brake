const Book = ({
  title,
  author,
  description,
  showDescription,
  visibilityHandler,
}) => {
  const buttonText = showDescription ? "hide description" : "show description";

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{author}</p>
      {showDescription && <p className="description">{description}</p>}
      <button onClick={visibilityHandler}>{buttonText}</button>
    </div>
  );
};

export default Book;
