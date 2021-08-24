import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiAddCircleFill } from 'react-icons/ri';

import Shelves from './components/Shelves';
import Header from './components/Header';

function Home(props) {
   const {
      currentlyReadingShelf,
      wantToReadShelf,
      readShelf,
      books,
      error,
      onUpdateShelves,
   } = props;

   return (
      <main className="home">
         <Header />
         {!error ? (
            <>
               <Shelves
                  shelves={{
                     'Currently Reading': currentlyReadingShelf,
                     'Want to Read': wantToReadShelf,
                     Read: readShelf,
                  }}
                  books={books}
                  onUpdateShelves={onUpdateShelves}
               />
               <Link className="add-btn" to="/search">
                  <RiAddCircleFill color="#3f9764" size={50} />
               </Link>
            </>
         ) : (
            <div className="error-box">
               <h1 style={{ color: 'red' }}>An Error Occurred</h1>
               <h2>{error}</h2>
            </div>
         )}
      </main>
   );
}

Home.propTypes = {
   currentlyReadingShelf: PropTypes.array.isRequired,
   wantToReadShelf: PropTypes.array.isRequired,
   readShelf: PropTypes.array.isRequired,
   books: PropTypes.array.isRequired,
   error: PropTypes.string,
   onUpdateShelves: PropTypes.func.isRequired,
};

export default Home;
