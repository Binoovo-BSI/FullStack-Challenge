import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
    url='http://localhost:3000/author/';
    authors: object[];
    authorChoosen: object[];
    
    constructor(private httpClient:HttpClient) { }
  
     getDisplayAuthors():Observable<any>{
        
        return this.httpClient.get(this.url + `all`);
    
     }

     setAuthors(authors:object[]):void{
      
        this.authors=authors
  
     }

     getAuthors():object{
      
        return this.authors
  
     }

     locateAuthor(authorChoose:any):object{
      
      this.authorChoosen = authorChoose;
      
      return;
   }

  }