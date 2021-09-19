import Book from './Book';
const Read = props => {
    return(
            props.read.map((book, index) => <Book key={index} book={book} state = 'read' selected = {props.get(book.id)} update = {props.update} addToList = {props.addToList} removeFromList = {props.removeFromList}/>)
    )
}

export default Read