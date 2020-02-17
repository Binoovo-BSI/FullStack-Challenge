import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit() {

    this.bookService.getDisplayBooks()
    .subscribe(
      //then we display constantly the movies
      res=> this.bookService.setBooks(res),
      error=>console.log(error)

    )

  }

}
