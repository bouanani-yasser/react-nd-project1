import React from 'react';
import BookController from './BookController';

function Book({ book }) {
   return (
      <div className="book">
         <div className="book-face">
            <img
               src={book.imageLinks && book.imageLinks.thumbnail}
               alt={book.title}
            />
            <BookController currentShelf={book.shelf} />
         </div>
         <p className="book-title">{book.title}</p>
         {/* <p className="author">{book.authors[0]}</p> */}
      </div>
   );
}

export default Book;
