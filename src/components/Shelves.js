import React from 'react';
import Shelf from './Shelf';

function Shelves({ shelves }) {
   return (
      <div className="shelves">
         {Object.keys(shelves).map((shelf) => (
            <div className="shelf-container" key={shelf}>
               <h1>{shelf}</h1>
               <hr />
               <Shelf books={shelves[shelf]} />
            </div>
         ))}
      </div>
   );
}

export default Shelves;
