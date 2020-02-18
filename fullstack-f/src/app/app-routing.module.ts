import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookDisplayComponent } from './components/book-display/book-display.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", redirectTo: "display", pathMatch:"full"},
  {path:"display", component:BookDisplayComponent},
  {path:"detail", component:BookDetailComponent},
  {path:"addBook", component:AddBookComponent},
  {path:"addAuthor", component:AddAuthorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }