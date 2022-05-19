import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {Card} from "../model/card";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(`${this.URL}/book`);
  }

  getAllCard(): Observable<any> {
    return this.http.get<any>(`${this.URL}/card`);
  }

  getAllStudent(): Observable<any> {
    return this.http.get<any>(`${this.URL}/student`);
  }

  findBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/book/${id}`);
  }

  borrowBook(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.URL}/card`, card);
  }

  editBook(book: Book): Observable<any> {
    return this.http.patch<Book>(`${this.URL}/book/${book.id}`, book);
  }

  returnCard(cardReturn: Card): Observable<Card> {
    return this.http.delete<Card>(`${this.URL}/card/${cardReturn.id}`);
  }
}
