import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {

  constructor(private authorService:AuthorService) { }
  dispChoosenAuthor : any = {};


  ngOnInit() {

    this.dispChoosenAuthor = this.authorService.authorChoosen;

  }

}
