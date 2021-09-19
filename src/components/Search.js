import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

// eslint-disable-next-line no-extend-native
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const Search = props => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query])
    
    const handleChange = event => {
        setQuery(event.target.value)
    }

    const getBooks = async(query) =>{
        if(query !== ''){
            await props.search(query.toProperCase())
            .then(books=>setBooks(books))
        }
        else{
            setBooks([])
        }
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                type="text" 
                placeholder="Search by title or author"
                onChange = {handleChange}
                />
              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                  {
                    books.error !== 'empty query'  ? books.map((book, index) => <Book key={index} book={book} state = 'search' selected = {props.get(book.id)} update = {props.update} updateList = {props.updateList}/>) : <li>No Available Books</li>
                  }
                </ol>
            </div>
        </div>
    )
}

export default Search

