import React from 'react';
import Shelf from './Shelf';

function Shelves({ shelves, books, onUpdateShelves }) {
   return (
      <div className="shelves">
         {Object.keys(shelves).map((shelf) => (
            <div className="shelf-container" key={shelf}>
               <h1>{shelf}</h1>
               <hr />
               <Shelf
                  shelfBooks={shelves[shelf]}
                  books={books}
                  onUpdateShelves={onUpdateShelves}
               />
            </div>
         ))}
      </div>
   );
}

export default Shelves;
