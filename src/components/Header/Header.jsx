import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/google_books_logo.png";
import Search from "../Search/Search";

const Header = ({ setSearchTerm }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(userInput);
  };

  const updateUserInput = (e) => {
    setUserInput(e.target.value !== "" ? e.target.value : "Best Sellers");
  };

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />

      <Search handleSubmit={handleSubmit} updateUserInput={updateUserInput} />
    </div>
  );
};

export default Header;
