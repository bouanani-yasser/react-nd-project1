import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

import { update } from '../BooksAPI';

class BookController extends Component {
   constructor(props) {
      super(props);
      this.state.currentShelf = props.currentShelf;
      this.optionNode = React.createRef();
   }

   state = { showOptions: false };

   componentDidMount() {
      document.addEventListener('mousedown', this.hideOptions, false);
   }

   componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideOptions, false);
   }

   hideOptions = (event) => {
      if (!!this.optionNode.current) {
         if (this.optionNode.current.contains(event.target)) {
            return;
         }
      }

      this.setState({ showOptions: false });
   };

   changeBookShelf = (shelf) => {
      update(this.props.book, shelf).then((shelves) => {
         this.props.onUpdateShelves({ ...this.props.book, shelf }, shelves);
      });
      this.setState({ showOptions: false, currentShelf: shelf });
   };

   render() {
      const { currentShelf } = this.state;
      return (
         <div className="book-controller">
            <button
               className="control-btn"
               onClick={() => {
                  this.setState((prev) => ({ showOptions: !prev.showOptions }));
               }}
            >
               <IoMdArrowDropdownCircle size={40} color="#3f9764" />
            </button>
            {this.state.showOptions && (
               <ul className="move-options" ref={this.optionNode}>
                  <li>Move to</li>
                  <li
                     className={`${
                        currentShelf === 'currentlyReading' && 'current'
                     }`}
                     onClick={() => {
                        this.changeBookShelf('currentlyReading');
                     }}
                  >
                     Currently Reading
                  </li>
                  <li
                     className={`${currentShelf === 'wantToRead' && 'current'}`}
                     onClick={() => {
                        this.changeBookShelf('wantToRead');
                     }}
                  >
                     Want to Read
                  </li>
                  <li
                     className={`${currentShelf === 'read' && 'current'}`}
                     onClick={() => {
                        this.changeBookShelf('read');
                     }}
                  >
                     Read
                  </li>
                  <li
                     className={`${
                        currentShelf !== 'read' &&
                        currentShelf !== 'wantToRead' &&
                        currentShelf !== 'currentlyReading' &&
                        'current'
                     }`}
                     onClick={() => {
                        this.changeBookShelf('none');
                     }}
                  >
                     None
                  </li>
               </ul>
            )}
         </div>
      );
   }
}

BookController.propTypes = {
   currentShelf: PropTypes.string,
   book: PropTypes.object.isRequired,
   onUpdateShelves: PropTypes.func.isRequired,
};

export default BookController;
