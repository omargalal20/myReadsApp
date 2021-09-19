import { Link } from 'react-router-dom';

const Shelves = props => {
    return(
        <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                {props.children}
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>
              <button></button>
            </Link>
          </div>
        </div>
        </div>
    )
}

export default Shelves