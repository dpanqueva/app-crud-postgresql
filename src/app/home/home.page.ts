import { Component } from '@angular/core';
import { Book } from './book';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  booksList: Book[] = [];

  constructor(private bookService: HomeService) {}

  ionViewDidEnter(){
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAllBooks().subscribe(
      book=>{
        console.log(book);
        this.booksList = book;
      }
    );
  }

}
