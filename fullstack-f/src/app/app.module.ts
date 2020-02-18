import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookDisplayComponent } from './components/book-display/book-display.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookDisplayComponent,
    AddBookComponent,
    AddAuthorComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
