import {Component} from '@angular/core';
import {ProductService} from "./service/ProductService";
import {Product} from "./model/Product";
import {StudentService} from "./service/StudentService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService,StudentService]
})
export class AppComponent {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {
  }

  getListProducts() {
    this.products = this.productService.getAllProducts();
  }

}
