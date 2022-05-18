import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductServiceService) {
    this.service.findAllProducts().subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
