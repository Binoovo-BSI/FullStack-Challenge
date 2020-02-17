import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BookDisplayComponent } from './components/book-display/book-display.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", redirectTo: "display", pathMatch:"full"},
  {path:"display", component:BookDisplayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }