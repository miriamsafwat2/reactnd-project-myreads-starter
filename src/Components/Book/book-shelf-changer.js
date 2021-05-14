import React from 'react'

class BookShelfChanger extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = { value: props.book.shelf };
  }
 

  change(event){
      this.setState({
        value: event.target.value,
      });
      this.props.onReadStatusChange(event.target.value, this.props.book);
  }

  render() {
    return <div className="book-shelf-changer">
        <select id="select" onChange={this.change.bind(this)} value={this.state.value}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>;
  }
}

export default BookShelfChanger;
