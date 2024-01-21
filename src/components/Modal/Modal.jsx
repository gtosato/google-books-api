import styles from "./Modal.module.scss";
import bookImg from "../../assets/book.jpeg";
const Modal = ({
  title,
  authors,
  description,
  publishedDate,
  publisher,
  imageLinks,
  previewLink,
  showModal,
  onClose,
}) => {
  if (!showModal) {
    return null;
  }
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.overlay_inner}>
          <button className={styles.close} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className={styles.inner_box}>
            <img src={imageLinks} alt="" />
            <div className={styles.info}>
              <h1>{title}</h1>
              <h3>{authors}</h3>
              <h4>
                {publisher} <span>{publishedDate}</span>
              </h4>
              <a href={previewLink} target="_blank">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className={styles.description}>{description}</h4>
        </div>
      </div>
      ;
    </>
  );
};

export default Modal;
