import Card from "../../components/Card/Card";
import { getBooks } from "../../data/books";
import { useState, useEffect } from "react";
import styles from "./CardList.module.scss";

const CardList = ({ searchTerm }) => {
  const [bookResults, setBookResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBooks = async () => {
      const results = await getBooks({ searchTerm });
      setBookResults(results);
      setLoading(false);
      // console.log(results, "BookResults");
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <>
      {loading && <h1 className={styles.loadingText}>Loading...</h1>}
      {!loading && (
        <>
          <h1 className={styles.resultsHeader}>
            {searchTerm === "Best Sellers"
              ? "Best Sellers"
              : `Search results for ${searchTerm}`}
          </h1>
          <section className={styles.cardList}>
            {bookResults !== null &&
              bookResults.map((book, i) => (
                <Card
                  key={i}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  imageLinks={book.imageLinks}
                  publishedDate={book.publishedDate}
                  publisher={book.publisher}
                  previewLink={book.previewLink}
                />
              ))}
          </section>
        </>
      )}
    </>
  );
};

export default CardList;
