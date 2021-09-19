import Book from './Book';
const Shelf = props => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.state}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map((book, index) => <Book key={index} book={book} state = {props.state} updateList = {props.updateList}/>)
                    }
                </ol>
            </div>
        </div>
    )
};

export default Shelf
