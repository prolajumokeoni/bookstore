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
export const saveBookToApi = async (data) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uJULW0akXJFdXgclsOsN/books/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  });
};

// REMOVE BOOOKS
export const removeBookFromApi = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uJULW0akXJFdXgclsOsN/books/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};
