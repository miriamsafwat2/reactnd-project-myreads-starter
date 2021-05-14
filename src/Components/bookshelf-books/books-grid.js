import React from "react";
import Book from "../Book/book";

class BooksGrid extends React.Component {

  render() {
    return (
      <ol className="books-grid">
        {this.props.readingList.map((b) => {
          let link = ''; if(b.imageLinks !== undefined) link = b.imageLinks.thumbnail
          return <li key={b.id}>
              <Book book={b} url= {link} title={b.title} authors={b.authors} onReadStatusChange={this.props.onReadStatusChange} />
            </li>;
        })}
      </ol>
    );
  }
}

export default BooksGrid;
