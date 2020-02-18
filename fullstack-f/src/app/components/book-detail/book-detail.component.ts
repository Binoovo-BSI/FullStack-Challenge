import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService:BookService) { }
  dispChoosenBook : any = {};

  ngOnInit() {

    this.dispChoosenBook = this.bookService.bookChoosen;

  }

}
