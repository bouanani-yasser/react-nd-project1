import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import AllBooks from './components/AllBooks';
import { search } from './BooksAPI';

class Search extends Component {
   state = { books: [] };

   onSearchHandler = (e) => {
      const { value } = e.target;
      search(value).then((data) => {
         this.setState({ books: data });
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
            <AllBooks books={this.state.books} />
         </main>
      );
   }
}

export default Search;
