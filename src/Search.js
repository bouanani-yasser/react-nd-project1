import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

import AllBooks from './components/AllBooks';
import { search } from './BooksAPI';

class Search extends Component {
   state = { searchResult: [] };

   onSearchHandler = (e) => {
      const { value } = e.target;
      value.trim()
         ? search(value).then((data) => {
              this.addShelfPropToSearchResults(data);
              this.setState({ searchResult: data });
           })
         : this.setState({ searchResult: [] });
   };

   addShelfPropToSearchResults = (data) => {
      data &&
         data.length > 0 &&
         data.forEach((searchBook) => {
            const foundBook = this.props.books.find(
               (book) => book.id === searchBook.id
            );

            foundBook
               ? (searchBook.shelf = foundBook.shelf)
               : (searchBook.shelf = 'none');
         });
   };

   render() {
      return (
         <main className="search-page">
            <header>
               <Link to="/">
                  <ImArrowLeft2 size={20} color="#222" />
               </Link>
               <input
                  onChange={(e) => this.onSearchHandler(e)}
                  type="text"
                  placeholder="Search by title or author"
               />
            </header>
            <hr />
            <AllBooks
               books={this.state.searchResult}
               onUpdateShelves={this.props.onUpdateShelves}
            />
         </main>
      );
   }
}

Search.propTypes = {
   books: PropTypes.array.isRequired,
   onUpdateShelves: PropTypes.func.isRequired,
};
export default Search;
