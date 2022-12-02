
import { useState } from 'react';
import './App.css';
import BooksCreate from './components/BooksCreate';

function App() {
  const [books, setbooks] = useState([])
  const createBooks = (title) => {
    console.log('title of book is ', title);
    setbooks(title)
  }
  return (
    <div>
      <BooksCreate onCreate={createBooks} />
      {books}
    </div>
  );
}

export default App;
