import React from 'react';
import Book from './Book';
function AllBooks({ books }) {
   return (
      <div className="all-books">
         {books &&
            books.length > 0 &&
            books.map((book) => <Book key={book.id} book={book} />)}
      </div>
   );
}

export default AllBooks;
