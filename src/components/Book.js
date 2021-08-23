import React from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
function Book({ book }) {
   return (
      <div className="book">
         <div className="book-face">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <button className="control-btn">
               <IoMdArrowDropdownCircle size={40} color="#3f9764" />
            </button>
         </div>
         <p className="book-title">{book.title}</p>
         {/* <p className="author">{book.authors[0]}</p> */}
      </div>
   );
}

export default Book;
