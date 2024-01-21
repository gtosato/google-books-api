import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Card.module.scss";

const Card = ({
  title = "Title not found",
  authors = "Author not found",
  description = "Description not found",
  imageLinks = "Image not found",
  publishedDate = "Published date not found",
  publisher = "Publisher not found",
  previewLink = "Preview link not found",
}) => {
  const [showModal, setShowModal] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
    <>
      <div className={styles.card} onClick={() => setShowModal(true)}>
        <img className={styles.image} src={imageLinks} alt="" />
        <div className={styles.cardInfo}>
          <h3>{title.slice(0, 50)}</h3>
          <p>{authors}</p>
        </div>
      </div>
      <Modal
        description={description}
        title={title}
        authors={authors}
        publishedDate={publishedDate}
        publisher={publisher}
        imageLinks={imageLinks}
        previewLink={previewLink}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Card;
