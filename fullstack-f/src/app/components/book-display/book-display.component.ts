import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {
  isSearchActive: boolean = false;

  constructor(private bookService:BookService) { }

  ngOnInit() {

    this.bookService.getDisplayBooks()
    .subscribe(
      //then we display constantly the movies
      res=> this.bookService.setBooks(res),
      error=>console.log(error)

    )

  }

  searchMovie(event){

    if(event.target.value.length == 0 && this.isSearchActive){
      //if the value for the title search input is 0, we keep back to the default results.
      this.bookService.getDisplayBooks()
      .subscribe(
      
      res=> this.bookService.setBooks(res),
      error=>console.log(error)

    )
    }
    
    if(event.target.value.length >= 3){
      //if the value for the title search is at least 3, we start displaying the results for
      //a better dynamic showcase.
      this.isSearchActive = true;
      this.bookService.getTitleBooks(event.target.value)
      .subscribe(res=>this.bookService.setBooks(res))
    }

  }

}
