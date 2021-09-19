import React, { useState } from 'react';

const Book = props => {
    const {title, authors} = props.book;
    const [value, setValue] = useState(props.state)

    if(typeof props.selected != 'undefined'){
        props.selected.then(book => {
            setValue(book.shelf);
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(event.target.value === 'currentlyReading'){
            props.updateList(props.book, 'currentlyReading')
        }
        else if(event.target.value === 'wantToRead'){
            props.updateList(props.book, 'wantToRead')
        }
        else if(event.target.value === 'read'){
            props.updateList(props.book, 'read')
        }
    }

    return(
        <li>
            <div className="book">
                <div className="book-top">
                  <div className="book-cover" 
                  style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks && props.book.imageLinks.smallThumbnail}")`}}></div>
                  <div className="book-shelf-changer">
                    <select value = {value} onChange = {handleSubmit}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}

export default Book
