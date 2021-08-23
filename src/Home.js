import React, { Component } from 'react';
import Shelves from './components/Shelves';
import { RiAddCircleFill } from 'react-icons/ri';
import Header from './components/Header';
import { Link } from 'react-router-dom';

class Home extends Component {
   state = {
      currentlyReadingShelf: [],
      wantToReadShelf: [],
      readShelf: [],
   };

   componentDidMount() {
      this.classifyBooksOnShelves();
   }

   classifyBooksOnShelves = () => {
      const { books } = this.props;

      books.forEach((book) => {
         switch (book.shelf) {
            case 'currentlyReading':
               this.setState((prev) => ({
                  currentlyReadingShelf: [...prev.currentlyReadingShelf, book],
               }));
               break;
            case 'wantToRead':
               this.setState((prev) => ({
                  wantToReadShelf: [...prev.wantToReadShelf, book],
               }));
               break;
            case 'read':
               this.setState((prev) => ({
                  readShelf: [...prev.readShelf, book],
               }));
               break;
            default:
               console.log('book shelf did not match');
               break;
         }
      });
   };

   render() {
      const { currentlyReadingShelf, wantToReadShelf, readShelf } = this.state;
      const { error } = this.props;

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
}

export default Home;
