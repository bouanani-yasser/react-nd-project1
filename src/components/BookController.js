import React, { Component } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

class BookController extends Component {
   constructor(props) {
      super(props);
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

   render() {
      const { currentShelf } = this.props;
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
                  >
                     Currently Reading
                  </li>
                  <li
                     className={`${currentShelf === 'wantToRead' && 'current'}`}
                  >
                     Want to Read
                  </li>
                  <li className={`${currentShelf === 'read' && 'current'}`}>
                     Read
                  </li>
                  <li
                     className={`${
                        currentShelf !== 'read' &&
                        currentShelf !== 'wantToRead' &&
                        currentShelf !== 'currentlyReading' &&
                        'current'
                     }`}
                  >
                     None
                  </li>
               </ul>
            )}
         </div>
      );
   }
}

export default BookController;
