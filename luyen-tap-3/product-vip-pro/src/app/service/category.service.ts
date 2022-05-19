import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {
  }

  getAllCategory(): Observable<any> {
    return this.http.get<any>(`${this.URL}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.URL}`, category);
  }

  editCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.URL}/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.URL}/${id}`);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.URL}/${id}`);
  }
}
