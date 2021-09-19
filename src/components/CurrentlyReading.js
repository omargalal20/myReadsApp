import Book from './Book';
const CurrentlyReading = props => {
    return(
            props.currentlyReading.map((book, index) => <Book key={index} book={book} state = 'currentlyReading' selected = {props.get(book.id)} update = {props.update} addToList = {props.addToList} removeFromList = {props.removeFromList}/>)
    )
};

export default CurrentlyReading