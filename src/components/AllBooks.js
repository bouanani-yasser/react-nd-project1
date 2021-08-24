import React from 'react';
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

export default AllBooks;
