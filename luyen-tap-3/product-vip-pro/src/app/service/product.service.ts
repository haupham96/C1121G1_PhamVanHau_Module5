import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {
  }

  getAllProducts(name: string, startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(`${this.URL}?name_like=${name}&startDate_like=${startDate}&endDate_like${endDate}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.URL}`, product);
  }

  editProduct(product: Product) {
    return this.http.put<Product>(`${this.URL}/${product.id}`, product);
  }

  deleteProductById(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.URL}/${id}`);
  }

  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  findProductByCode(code: string): Observable<Product> {
    return this.http.get<Product>(`${this.URL}?code=${code}`);
  }
}
