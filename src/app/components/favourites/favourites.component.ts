import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favouriteBooks = [];

  count = 0;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.favouriteBooks = this.bookService.getFavourites();
    this.count = this.favouriteBooks.length;
  }

  removeFromFav(id) {
    this.bookService.removeBookfromFav(id);
  }
}
