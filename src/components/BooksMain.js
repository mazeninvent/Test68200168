import React, { useContext } from "react";
import { BookContext } from "../context/BookStoreContext";

const BooksMain = ({ sendModalval, view }) => {
  const { filterBooks, openModal } = useContext(BookContext);
  const handleClick = (val) => {
    sendModalval({ ...val });
    openModal();
  };
  return (
    <div className="books-main">
      {filterBooks.map((book) => {
        const { bookID, authors, genre, img, discription, title } = book;
        if (view === "grid") {
          return (
            <article
              key={bookID}
              onClick={() => {
                handleClick({ authors, genre, img, discription, title });
              }}
            >
              <div className="img-container">
                <img src={img} alt="" />
                <p className="bottom-right">{genre}</p>
              </div>
              <h4>{title}</h4>
              <p>{authors}</p>
            </article>
          );
        }
        return (
          <section
            key={bookID}
            key={bookID}
            onClick={() => {
              handleClick({ authors, genre, img, discription, title });
            }}
          >
            <h4>Title: {title}</h4>
            <p>Authors: {authors}</p>
            <p>Genre: {genre}</p>
          </section>
        );
      })}
    </div>
  );
};

export default BooksMain;
