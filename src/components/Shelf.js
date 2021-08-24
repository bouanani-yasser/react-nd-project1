import React from 'react';
import Book from './Book';

function Shelf({ shelfBooks, books, onUpdateShelves }) {
   return (
      <div className="shelf-books">
         {books.length > 0 ? (
            books.map(
               (book) =>
                  shelfBooks.find((bookId) => book.id === bookId) && (
                     <Book
                        key={book.id}
                        book={book}
                        onUpdateShelves={onUpdateShelves}
                     />
                  )
            )
         ) : (
            <h2>No books on this Shelf</h2>
         )}
      </div>
   );
}

export default Shelf;
