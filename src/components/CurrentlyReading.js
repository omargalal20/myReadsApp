import Book from './Book';
const CurrentlyReading = props => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.currentlyReading.map((book, index) => <Book key={index} book={book} state = 'currentlyReading' selected = {props.get(book.id)} update = {props.update} addToList = {props.addToList} removeFromList = {props.removeFromList}/>)
                    }
                </ol>
            </div>
        </div>
    )
};

export default CurrentlyReading