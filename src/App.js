import { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import BooksMain from "./components/BooksMain";
import Modal from "./components/Modal";
import Search from "./components/Search";

import "./App.css";
import { white } from "color-name";

function App() {
  const [view, setView] = useState("grid");
  const [modalVal, setModalVal] = useState({});
  const changeView = () => {
    if (view === "grid") {
      setView("list");
    } else {
      setView("grid");
    }
  };
  const sendModalval = (val) => {
    setModalVal({ ...val });
  };
  return (
    <>
      <SideNavbar />
      <main>
        <nav>
          <div className="nav-center">
            <h2>Book Store</h2>
            <img src="logo.png" width="160" height="80" />
          </div>
        </nav>
        <Search />
        <BooksMain sendModalval={sendModalval} view={view} />
        <Modal modalVal={{ ...modalVal }} />
      </main>
    </>
  );
}

export default App;
