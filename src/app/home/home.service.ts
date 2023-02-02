import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private urlEndpoint: string = 'http://localhost:3000/api/library';

  constructor(private bookClient: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.bookClient.get<Book[]>(this.urlEndpoint);
  }

  createBook(newBook: Book): Observable<Book>{
    return this.bookClient.post<Book>(this.urlEndpoint, newBook);
  }
}
