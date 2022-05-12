import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductSvService {

  private url = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) {
  }

  public getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  public saveProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/create`,product);
  }

  eidtProduct(product): Observable<Product> {
    return this.http.put<Product>(this.url + '/edit/' + product.id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  findById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/find/${id}`);
  }

}
