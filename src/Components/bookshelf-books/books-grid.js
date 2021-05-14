import React from "react";
import Book from "../Book/book";

class BooksGrid extends React.Component {

  render() {
    return (
      <ol className="books-grid">
        {this.props.readingList.map((b) => {
          return <li key={b.id}>
              <Book book={b} url={b.imageLinks.thumbnail} title={b.title} authors={b.authors} onReadStatusChange={this.props.onReadStatusChange} />
            </li>;
        })}
      </ol>
    );
  }
}

export default BooksGrid;
