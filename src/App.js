import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import BooksGrid from "./Components/bookshelf-books/books-grid";
import * as API from "./BooksAPI.js";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.onReadStatusChange = this.onReadStatusChange.bind(this);
    this.search = this.search.bind(this);

    //console.log(API.getAll());
    console.log(API.search("react"));
  }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    booksSearched: [],
    showSearchPage: false,
    value: "",
  };

  componentDidMount = () => {
    API.getAll().then((books) => {
      this.setState({ books: books });
    });
  };

  search(event) {
    this.setState({ value: event.target.value });
    //console.log(event.target.value);
    API.search(event.target.value).then((books) => {
      if (books === undefined || books.length === 0) {
        this.setState({ booksSearched: [] });
      } else if (books.length > 0) {
        // if the book is already on the shelf, add its shelf
        for(let i = 0; i < books.length; i++){
          for(let j = 0; j < this.state.books.length; j++){
            if(books[i].id === this.state.books[j].id){
              books[i].shelf = this.state.books[j].shelf;
            }
          }
        }
        this.setState({ booksSearched: books });

        console.log(this.state.booksSearched);
      }
    }).catch((error) => console.log(error) );
  }

  onReadStatusChange = (shelf, book) => {
    API.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((oldState) => ({
        books: oldState.books
          .filter((b) => b.title !== book.title)
          .concat([book]),
      }));
    });
  };

  render() {
    return <div className="app">
        <Route path="/search" render={() => <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">
                  Back
                </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.search} />
                </div>
              </div>
              <div className="search-books-results">
                <BooksGrid readingList={this.state.booksSearched} onReadStatusChange={this.onReadStatusChange} />
              </div>
            </div>} />

        <Route exact path="/" render={() => <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <BooksGrid readingList={this.state.books.filter((b) => b.shelf === "currentlyReading")} onReadStatusChange={this.onReadStatusChange} />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <BooksGrid readingList={this.state.books.filter((b) => b.shelf === "wantToRead")} onReadStatusChange={this.onReadStatusChange} />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <BooksGrid readingList={this.state.books.filter((b) => b.shelf === "read")} onReadStatusChange={this.onReadStatusChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                
                  
                    <Link to="/search">
                  <button></button>
                </Link>
              </div>
            </div>} />
      </div>;
  }
}

export default BooksApp;
