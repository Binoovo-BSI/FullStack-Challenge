import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  constructor(private authorService:AuthorService) { }

  ngOnInit() {

    this.authorService.getDisplayAuthors()
    .subscribe(
      //then we display constantly the authors
      res=> this.authorService.setAuthors(res),
      error=>console.log(error)

    )

  }

}
