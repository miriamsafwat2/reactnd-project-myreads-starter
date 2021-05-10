import React from "react";
import Book from "../Book/book";

class BooksGrid extends React.Component {

  render() {
    return (
      <ol className="books-grid">
        {this.props.readingList.map((b) => {
          return (
            <li>
              <Book
                book = {b}
                url={b.url}
                title={b.title}
                authors={b.authors}
                onReadStatusChange={this.props.onReadStatusChange}
              />
            </li>
          );
        })}
      </ol>
    );
  }
}

export default BooksGrid;
