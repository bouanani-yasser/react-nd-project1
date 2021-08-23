import React, { Component } from 'react';
import './App.css';
import * as books from './BooksAPI';
import { Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Spinner from './components/spinner';

class App extends Component {
   state = { loading: true, books: [], error: null };

   componentDidMount() {
      this.fetchBooks();
   }

   fetchBooks = () => {
      books
         .getAll()
         .then((data) => {
            this.setState({ books: data, loading: false });
         })
         .catch((err) => {
            this.setState({ loading: false, error: err.message });
         });
   };

   render() {
      return (
         <div className="app">
            <Route exact path="/">
               {this.state.loading ? (
                  <Spinner />
               ) : (
                  <Home books={this.state.books} error={this.state.error} />
               )}
            </Route>
            <Route path="/search">
               <Search />
            </Route>
         </div>
      );
   }
}

export default App;
