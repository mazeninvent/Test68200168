import React, { useEffect, useState } from "react";

const BookContext = React.createContext();

const BookStoreContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const search = (val) => {
    if (books.length !== 0) {
      const newBooksTitle = books.filter((book) =>
        book.title.toLowerCase().includes(val.toLowerCase())
      );
      const newBooksAuthor = books.filter((book) =>
        book.authors.toLowerCase().includes(val.toLowerCase())
      );

      let tempBook = newBooksTitle.concat(newBooksAuthor);

      const newBooks = [...new Set(tempBook)];

      setFilterBooks([...newBooks]);
      console.log(filterBooks);
    }
  };

  const fetchBooks = async () => {
    await fetch("data.json")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
        setFilterBooks(result);
      });
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <BookContext.Provider
      value={{ filterBooks, openModal, closeModal, isModalOpen, search }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookStoreContext, BookContext };
