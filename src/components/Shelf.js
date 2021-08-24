import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

function Shelf({ shelfBooks, books, onUpdateShelves }) {
   return (
      <div className="shelf-books">
         {shelfBooks.length > 0 ? (
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

Shelf.propTypes = {
   books: PropTypes.array.isRequired,
   shelfBooks: PropTypes.array.isRequired,
   onUpdateShelves: PropTypes.func.isRequired,
};

export default Shelf;
