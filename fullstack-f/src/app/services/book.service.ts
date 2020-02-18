import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    url='http://localhost:3000/book/';
    books: object[];
    bookChoosen: object[];
    
    constructor(private httpClient:HttpClient) { }
  
     getDisplayBooks():Observable<any>{
        
        return this.httpClient.get(this.url + `all`);
    
     }

     setBooks(books:object[]):void{
      
        this.books=books
  
     }

     getBooks():object{
      
        return this.books
  
     }

     locateBook(bookChoose:any):object{
      
      this.bookChoosen = bookChoose;
      
      return;
     }

     regBook(regis_d:any):Observable<any>{
    
      return this.httpClient.post(this.url + `add`, regis_d);
     }

     getTitleBooks(title:string):Observable<any>{

      return this.httpClient.get(this.url + `title/` + title);
     }

  }