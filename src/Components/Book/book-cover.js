import React from "react";

class BookCover extends React.Component {
  render() {
    return (
    <div className="book-cover" 
    style={{ width: 128, height: 193, backgroundImage: `url(${this.props.url})`}}>
    </div>
    );
  }
}

export default BookCover;
