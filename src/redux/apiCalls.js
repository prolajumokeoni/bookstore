// SHOW BOOKS
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uJULW0akXJFdXgclsOsN/books/';
const fetchBooks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const formattedBooks = [];
  Object.keys(data).forEach((key) => {
    if (key) {
      formattedBooks.push({ ...data[key][0], item_id: key });
    }
  });

  return formattedBooks;
};

export default fetchBooks;
// ADD BOOKS
// REMOVE BOOOKS
