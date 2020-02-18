import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  bookRegist = {
    name: '',
    isbn: '',
    author_Id: ''
  };
  msgError = "";

  constructor(private authorService:AuthorService, private bookService:BookService, private router:Router) { }
  dispChoosenAuthor : any = {};


  ngOnInit() {

    this.dispChoosenAuthor = this.authorService.authorChoosen;
    this.bookRegist.author_Id = this.dispChoosenAuthor._id;

  }

  regBook() {

    console.log(this.bookRegist);
    this.bookService.regBook(this.bookRegist)
    .subscribe(
      
      (res) => { 

        
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 1000);
        
      },
      error=>console.log(error)

    )

    
  }

}
