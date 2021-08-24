import React from 'react';
import BookController from './BookController';

function Book({ book, onUpdateShelves }) {
   return (
      <>
         {book && book.imageLinks ? (
            <div className="book">
               <div className="book-face">
                  <img src={book.imageLinks.thumbnail} alt={book.title} />
                  <BookController
                     currentShelf={book.shelf}
                     book={book}
                     onUpdateShelves={onUpdateShelves}
                  />
               </div>
               <p className="book-title">{book.title}</p>
               {book.authors &&
                  book.authors.length > 0 &&
                  book.authors.map((author, index) => (
                     <p className="author" key={index}>
                        {author}
                     </p>
                  ))}
            </div>
         ) : (
            <></>
         )}
      </>
   );
}

export default Book;
