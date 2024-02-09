import React from 'react';
import '../BookList.css';

const BookList = ({ books, searchTerm }) => {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="book-list">
      <h2>Book List</h2>
      <div className="books-container">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
