import Book from './Book';
const Read = props => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.read.map((book, index) => <Book key={index} book={book} state = 'read' selected = {props.get(book.id)} update = {props.update} addToList = {props.addToList} removeFromList = {props.removeFromList}/>)
                    }
                </ol>
            </div>
        </div>
    )
}

export default Read