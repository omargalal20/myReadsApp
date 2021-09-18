import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route,Link } from 'react-router-dom';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import Read from './components/Read';
import Search from './components/Search';

/**
 * TODO: Instead of using this state variable to keep track of which page
 * we're on, use the URL in the browser's address bar. This will ensure that
 * users can use the browser's back and forward buttons to navigate between
 * pages, as well as provide a good URL they can bookmark and share.
 */

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToReading: [],
    read: []
  }

  componentDidMount(){
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books=>books.forEach((book)=>{
      this.addToList(book,book.shelf)
    }))
  }

  addToList = (book, nameOfList) => {
    if(nameOfList === 'currentlyReading'){
      const newList = this.state.currentlyReading.concat([book])
      this.setState({
        currentlyReading : newList
      })
    }
    else if(nameOfList === 'wantToRead'){
      const newList = this.state.wantToReading.concat([book])
      this.setState({
        wantToReading : newList
      })
    }
    else if(nameOfList === 'read'){
      const newList = this.state.read.concat([book])
      this.setState({
        read : newList
      })
    }
  }

  removeFromList = (book, nameOfList) => {
    if(nameOfList === 'currentlyReading'){
      const newList = this.state.currentlyReading.filter(selectedBook => book.title !== selectedBook.title)
      this.setState({
        currentlyReading : newList
      })
    }
    else if(nameOfList === 'wantToRead'){
      const newList = this.state.wantToReading.filter(selectedBook=> book.title !== selectedBook.title)
      this.setState({
        wantToReading : newList
      })
    }
    else{
      const newList = this.state.read.filter(selectedBook => book.title !== selectedBook.title)
      this.setState({
        read : newList
      })
    }
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
                    <CurrentlyReading currentlyReading = {this.state.currentlyReading} update = {BooksAPI.update} get = {BooksAPI.get} addToList = {this.addToList} removeFromList = {this.removeFromList}/>

                    <WantToRead wantToReading = {this.state.wantToReading} update = {BooksAPI.update} get = {BooksAPI.get} addToList = {this.addToList} removeFromList = {this.removeFromList}/>

                    <Read read = {this.state.read} update = {BooksAPI.update} get = {BooksAPI.get} addToList = {this.addToList} removeFromList = {this.removeFromList}/>
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
        <Search search = {BooksAPI.search} update = {BooksAPI.update} getAllBooks = {this.getAllBooks} get = {BooksAPI.get} addToList = {this.addToList} removeFromList = {this.removeFromList}/>
        </Route>
      </>
    )}
}

export default BooksApp
