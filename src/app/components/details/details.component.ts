import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: number;
  book;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (data) => {
        this.id = data.id;
      },
      error: (err) => console.log(err),
    });

    this.bookService.getSingleBook(this.id).subscribe({
      next: (book) => {
        this.book = book;
      },
      error: (err) => console.log(err),
    });
  }

  addBooktoFav() {
    this.bookService.addToFavourites(this.book);
    this.router.navigateByUrl('/home/favourites');
  }
}
