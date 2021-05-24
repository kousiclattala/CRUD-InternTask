import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() bookId: number;

  books;
  totalbooks: number;
  config: any;
  constructor(private bookService: BookService, private router: Router) {
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalbooks,
    };
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.totalbooks = this.books.length;
      },
      error: (err) => console.log(err),
    });
  }

  selectedBook(event) {}

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
