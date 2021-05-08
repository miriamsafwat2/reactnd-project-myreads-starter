import React from "react";
import ReactDOM from "react-dom";

class BookCover extends React.Component {
  render() {
    return (
    <div className="book-cover" 
    style={{ width: 128, height: 193, backgroundImage: this.props.url }}>
    </div>
    );
  }
}

export default BookCover;
