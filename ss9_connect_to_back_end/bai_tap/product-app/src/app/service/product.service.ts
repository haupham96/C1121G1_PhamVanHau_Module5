import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  findAllProduct(): Observable<any> {
    return this.http.get<any>(`${this.URL}/product`);
  }

  findAllCategory(): Observable<any> {
    return this.http.get<any>(`${this.URL}/category`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.URL}/product`, product);
  }

  eidtProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.URL}/product/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.URL}/product/${id}`);
  }

  findProductById(id: number): Observable<Product> {
    return this.http.get(`${this.URL}/product/${id}`);
  }
}
