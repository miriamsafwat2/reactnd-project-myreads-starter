import React from "react";
import ReactDOM from "react-dom";
import BookCover from "./book-cover";
import BookShelfChanger from "./book-shelf-changer.js";


class Book extends React.Component {
  render() {
    return (
        <div className="book">
            <div className="book-top">
                <BookCover url= {this.props.url} />
                <BookShelfChanger />
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">
                {this.props.authors}
            </div>
        </div>
    );
  }
}

export default Book;
