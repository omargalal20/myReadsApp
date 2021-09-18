import Book from './Book';
const WantToRead = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.wantToReading.map((book, index) => <Book key={index} book={book} state = 'wantToRead' selected = {props.get(book.id)} update = {props.update} addToList = {props.addToList} removeFromList = {props.removeFromList}/>)
                    }
                </ol>
            </div>
        </div>
    )
}

export default WantToRead