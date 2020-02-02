import React, { Component } from 'react';
import { connect } from "react-redux";
import { setBooks } from './actions/books'

class App extends Component {
  render() {
      const { books } = this.props.books;
      const { setBooks } = this.props;
      const newBooks = [
          {
              id: 0,
              title: 'Shopping Card' + new Date()
          }
      ];
      return(
       <div>
          <h1>{books[0].title}</h1>
           <button onClick = {setBooks.bind(this, newBooks)}>SET NEW BOOKS</button>
      </div>
       );
  }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
