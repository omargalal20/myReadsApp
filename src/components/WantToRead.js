import Book from './Book';
const WantToRead = props => {
    return (
            props.wantToReading.map((book, index) => <Book key={index} book={book} state = 'wantToRead' selected = {props.get(book.id)} update = {props.update} addToList = {props.addToList} removeFromList = {props.removeFromList}/>)
    )
}

export default WantToRead