import styles from "./Search.module.scss";

const Search = ({ handleSubmit, updateUserInput }) => {
  return (
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
  );
};

export default Search;
