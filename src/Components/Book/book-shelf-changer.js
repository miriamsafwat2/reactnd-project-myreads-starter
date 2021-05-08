import React from 'react'
import ReactDOM from 'react-dom'

class BookShelfChanger extends React.Component {
  render() {
      return(
          <div className="book-shelf-changer">
            <select>
                <option value="movee" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
      );
  }
}

export default BookShelfChanger;
