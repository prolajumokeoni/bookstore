import { combineReducers } from 'redux';
import { removeBookFromApi, saveBookToApi } from '../apiCalls';

// books.js
export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

// Actions
export const addBooks = (book) => ({
  type: 'ADD_BOOKS',
  payload: book,
});
export const removeBooks = (id) => ({
  type: 'REMOVE_BOOKS',
  payload: id,
});
// Reducers
export const booksReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKS':
      saveBookToApi(action.payload);
      return [...state, action.payload];
    case 'REMOVE_BOOKS':
      removeBookFromApi(action.payload);
      return state.filter((book) => book.item_id !== action.payload);
    case 'SET_BOOKS':
      return action.payload;
    default:
      return state;
  }
};
// Store
export const rootReducers = combineReducers({
  books: booksReducers,
});
