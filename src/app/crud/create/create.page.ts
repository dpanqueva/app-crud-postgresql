import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/home/book';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  /*book = new FormGroup(
    {
      name: new FormControl(''),
      description: new FormControl('')
    }
  );*/

  book = new Book();



  constructor(private bookService: HomeService, private router: Router) { }

  ngOnInit() {
  }

  createBook(){
    console.log('guardando...')
    this.bookService.createBook(this.book).subscribe(
      data=> console.log('Created successfull' + data)
    );
    this.router.navigate(['/home']);
  }

}
