import {Component, OnInit} from '@angular/core';
import {ProductSvService} from "../service/product-sv.service";
import {Product} from "../model/product";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
import {log} from "util";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  page:number = 1 ;

  constructor(private service: ProductSvService) {
    this.getAll();
    console.log(this.products);
  }

  ngOnInit(): void {
  }

  getAll() {
    this.service.getAllProduct().subscribe(data => {this.products = data}
      , error =>
        console.log(error));
  }

}
