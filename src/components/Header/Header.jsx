import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/google_books_logo.png";

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
      <img src={logo} alt="" className={styles.logo} />

      <form onSubmit={handleSubmit}>
        <div className={styles.search}>
          <input
            type="text"
            name="searchBox"
            placeholder="Enter search term..."
            onChange={updateUserInput}
          />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Header;
