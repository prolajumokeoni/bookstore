// books.js
import { combineReducers } from 'redux';
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
      return [...state, action.payload];
    case 'REMOVE_BOOKS':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
// Store
export const rootReducers = combineReducers({
  books: booksReducers,
});
