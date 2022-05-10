import {Product} from "../model/Product";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {
  products: Array<Product> = [
    {id: 1, name: 'iPhone1', price: '500'},
    {id: 2, name: 'iPhone2', price: '600'},
    {id: 3, name: 'iPhone3', price: '700'},
  ];

  constructor() {
  }

  public getAllProducts() {
    return this.products;
  }

}
