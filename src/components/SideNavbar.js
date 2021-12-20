import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookStoreContext";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const SideNavbar = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const { filterBooks } = useContext(BookContext);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="sidenav">
      <div className="navcontent">
        <h2>Library</h2>
        <section>
          <div className="side-nav-gid">
            <h3>My Books</h3>
            <button>{filterBooks.length}</button>
          </div>
          <div className="side-nav-gid">
            <h3>Add new Book</h3>
          </div>
        </section>
        <div className="settings">
          <h2>By Mazen Mohsen</h2>

          <h3>Settings</h3>
          <section>
            <button className="btn" onClick={toggleTheme}>
              Toggle Theme
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
