import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  URL = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {
  }

  getAllTodos(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  save(todo: Todo): Observable<Todo> {
    return this.http.post(`${this.URL}`, todo);
  }

  edit(todo: Todo): Observable<Todo> {
    return this.http.put(`${this.URL}/${todo.id}`, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get(`${this.URL}/${id}`);
  }

  delete(id: number): Observable<Todo> {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
