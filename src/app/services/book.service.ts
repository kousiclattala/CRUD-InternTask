import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  favouriteBooks = [];

  url = 'https://609cd6ba04bffa001792d638.mockapi.io/books';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get(`${this.url}`);
  }

  getSingleBook(book_id) {
    return this.http.get(`${this.url}/${book_id}`);
  }

  addToFavourites(book: Object) {
    this.favouriteBooks.push(book);
  }

  getFavourites() {
    return this.favouriteBooks;
  }

  removeBookfromFav(id) {
    this.favouriteBooks.forEach((book) => {
      if (book.id === id) {
        this.favouriteBooks.splice(book, 1);
      }
    });
  }
}
