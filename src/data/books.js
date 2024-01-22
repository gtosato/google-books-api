export const getBooks = async ({ searchTerm }) => {
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = "";

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40&key=${apiKey}`
  );
  const data = await response.json();

  // console.log(data.items, "books.js");

  const cleanedData = data.items.map((book) => {
    const bookImg =
      book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      publishedDate: book.volumeInfo.publishedDate,
      publisher: book.volumeInfo.publisher,
      previewLink: book.volumeInfo.previewLink,
      imageLinks: bookImg,
    };
  });
  return cleanedData;
};
