import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

function AllBooks({ books, onUpdateShelves }) {
   return (
      <div className="all-books">
         {books &&
            books.length > 0 &&
            books.map((book) => (
               <Book
                  key={book.id}
                  book={book}
                  onUpdateShelves={onUpdateShelves}
               />
            ))}
      </div>
   );
}

AllBooks.propTypes = {
   books: PropTypes.any,
   onUpdateShelves: PropTypes.func.isRequired,
};

export default AllBooks;
