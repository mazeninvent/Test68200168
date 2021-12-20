import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookStoreContext";

const Search = () => {
  const [text, setText] = useState("");
  const { search } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    search(text);
  };
  return (
    <form className="search">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="title, authors, genre"
      />

      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        🔍
      </button>
    </form>
  );
};

export default Search;
