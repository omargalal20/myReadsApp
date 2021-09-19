import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route,Link } from 'react-router-dom';
import Shelf from './components/Shelf';
import Search from './components/Search';


/**
 * TODO: Instead of using this state variable to keep track of which page
 * we're on, use the URL in the browser's address bar. This will ensure that
 * users can use the browser's back and forward buttons to navigate between
 * pages, as well as provide a good URL they can bookmark and share.
 */

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  updateList = (book, newShelf) => {
    BooksAPI.update(book,newShelf).then(() => {
      book.shelf = newShelf
      this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([ book ])
      })
    )})
  }

    render() {
      return (
      <>
        <Route exact path = '/'>
        <div className="app">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>

                    <Shelf state = 'currentlyReading' books = {this.state.books.filter(book => book.shelf === 'currentlyReading')} updateList = {this.updateList}/>

                    <Shelf state = 'wantToRead' books = {this.state.books.filter(book => book.shelf === 'wantToRead')} updateList = {this.updateList}/>

                    <Shelf state = 'read' books = {this.state.books.filter(book => book.shelf === 'read')} updateList = {this.updateList}/>

                  </div>
                </div>
                <div className="open-search">
                  <Link to='/search'>
                    <button></button>
                  </Link>
                </div>
              </div>
        </div>
        </Route>

        <Route exact path = '/search'>
        <Search search = {BooksAPI.search} update = {BooksAPI.update} getAllBooks = {this.getAllBooks} get = {BooksAPI.get} updateList = {this.updateList}/>
        </Route>
      </>
    )}
}

export default BooksApp
