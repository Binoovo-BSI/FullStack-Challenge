import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  authorRegist = {
    firstName: '',
    lastName: ''
  };
  msgError = "";

  constructor(private authorService:AuthorService, private router:Router) { }


  ngOnInit() {

    this.authorService.getDisplayAuthors()
    .subscribe(
      //then we display constantly the authors
      res=> this.authorService.setAuthors(res),
      error=>console.log(error)

    )

  }

  sendRegis(){

    if (this.authorRegist.firstName != "" && this.authorRegist.lastName != ""){

    this.authorService.regAuthor(this.authorRegist)
    .subscribe(
      
      (res) => { 

        
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 1000);
        
      },
      error=>console.log(error)

    )

    }else{

      this.msgError = "Debes de rellenar los dos campos";

    }
    
    
  }

}
