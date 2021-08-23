import React from 'react';
import Book from './Book';

function Shelf({ books }) {
   return (
      <div className="shelf-books">
         {books.map((book) => (
            <Book key={book.id} book={book} />
         ))}
      </div>
   );
}

export default Shelf;
