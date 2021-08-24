import React from 'react';
import Shelves from './components/Shelves';
import { RiAddCircleFill } from 'react-icons/ri';
import Header from './components/Header';
import { Link } from 'react-router-dom';

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

export default Home;
