import React, { Component } from 'react';
import './App.css';
import * as books from './BooksAPI';
import { Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Spinner from './components/spinner';

class App extends Component {
   state = {
      loading: true,
      books: [],
      currentlyReadingShelf: [],
      wantToReadShelf: [],
      readShelf: [],
      error: null,
   };

   componentDidMount() {
      this.fetchBooks();
   }

   fetchBooks = () => {
      books
         .getAll()
         .then((data) => {
            this.setState({ books: data, loading: false });
            this.classifyBooksOnShelves(data);
         })
         .catch((err) => {
            this.setState({ loading: false, error: err.message });
         });
   };

   classifyBooksOnShelves = (books) => {
      books.forEach((book) => {
         switch (book.shelf) {
            case 'currentlyReading':
               this.setState((prev) => ({
                  currentlyReadingShelf: [
                     ...prev.currentlyReadingShelf,
                     book.id,
                  ],
               }));
               break;
            case 'wantToRead':
               this.setState((prev) => ({
                  wantToReadShelf: [...prev.wantToReadShelf, book.id],
               }));
               break;
            case 'read':
               this.setState((prev) => ({
                  readShelf: [...prev.readShelf, book.id],
               }));
               break;
            default:
               console.log('book shelf did not match');
               break;
         }
      });
   };

   updateShelves = (book, shelves) => {
      this.updateBook(book);
      this.setState({
         currentlyReadingShelf: shelves.currentlyReading,
         wantToReadShelf: shelves.wantToRead,
         readShelf: shelves.read,
      });
   };

   updateBook = (book) => {
      const updatedBooks = this.state.books.filter((bk) => bk.id !== book.id);
      this.setState({ books: [...updatedBooks, book] });
   };

   render() {
      return (
         <div className="app">
            <Route exact path="/">
               {this.state.loading ? (
                  <Spinner />
               ) : (
                  <Home
                     books={this.state.books}
                     error={this.state.error}
                     onFetchBooks={this.fetchBooks}
                     onUpdateShelves={this.updateShelves}
                     currentlyReadingShelf={this.state.currentlyReadingShelf}
                     wantToReadShelf={this.state.wantToReadShelf}
                     readShelf={this.state.readShelf}
                  />
               )}
            </Route>
            <Route path="/search">
               <Search
                  onUpdateShelves={this.updateShelves}
                  books={this.state.books}
               />
            </Route>
         </div>
      );
   }
}

export default App;
