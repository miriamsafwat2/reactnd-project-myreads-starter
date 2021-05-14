import React from "react";
import BookCover from "./book-cover";
import BookShelfChanger from "./book-shelf-changer.js";


class Book extends React.Component {
 
  render() {
    return <div className="book">
        <div className="book-top">
          <BookCover url={this.props.url} />
          <BookShelfChanger onReadStatusChange={this.props.onReadStatusChange} book={this.props.book} />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">
          {this.props.authors && this.props.authors.join(", ")}
        </div>
      </div>;
  }
}

export default Book;
