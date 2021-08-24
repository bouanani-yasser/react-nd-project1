import React from 'react';
import PropTypes from 'prop-types';

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

Shelves.propTypes = {
   books: PropTypes.array.isRequired,
   shelves: PropTypes.object.isRequired,
   onUpdateShelves: PropTypes.func.isRequired,
};

export default Shelves;
