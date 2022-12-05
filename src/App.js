
import { useState } from 'react';
import './App.css';
import BooksCreate from './components/BooksCreate';
import BooksList from './components/BooksList';

function App() {
  const [books, setbooks] = useState([])
  const editBookbuId = (id, newTitle) => {
    const updateingBook = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    })
    setbooks(updateingBook)
  }
  const deletebooksById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setbooks(updatedBooks)

  }
  const createBooks = (title) => {
    console.log('title of book is ', title);
    const updateBooks = [
      ...books, { id: Math.round(Math.random() * 9999), title }
    ]
    setbooks(updateBooks)
  }
  return (
    <div className='app'>
      <BooksList books={books} onDelete={deletebooksById} onEdit={editBookbuId} />
      <BooksCreate onCreate={createBooks} />

    </div>
  );
}

export default App;
