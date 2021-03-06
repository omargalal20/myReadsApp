import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Shelves from './components/Shelves';
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

      newShelf === 'none' ? this.setState(state => ({books: state.books.filter(b => b.id !== book.id)})) 
      : this.setState(state => ({books: state.books.filter(b => b.id !== book.id).concat([ book ])}))
    })
  }

    render() {
      return (
      <>
        <Switch>
          <Route exact path = '/'>
            <Shelves>
              <Shelf shelf = 'Currently Reading' state = 'currentlyReading' books = {this.state.books.filter(book => book.shelf === 'currentlyReading')} updateList = {this.updateList}/>
                    
              <Shelf shelf = 'Want To Read' state = 'wantToRead' books = {this.state.books.filter(book => book.shelf === 'wantToRead')} 
              updateList = {this.updateList}/>
                    
              <Shelf shelf = 'Read' state = 'read' books = {this.state.books.filter(book => book.shelf === 'read')} 
              updateList = {this.updateList}/>
            </Shelves>
          </Route>

          <Route exact path = '/search'>
          <Search search = {BooksAPI.search} get = {BooksAPI.get} updateList = {this.updateList}/>
          </Route>
        </Switch>
      </>
    )}
}

export default BooksApp
