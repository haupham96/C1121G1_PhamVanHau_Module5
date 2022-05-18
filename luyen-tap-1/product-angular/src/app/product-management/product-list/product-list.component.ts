import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/product";
import {ModalDirective} from "angular-bootstrap-md";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  page = 0;
  productDelete: Product = {};


  constructor(private service: ProductServiceService) {
    this.loadAll();
  }

  loadAll() {
    this.service.findAllProducts('', '', '').subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  sendDeleteInfor(product: Product) {
    this.productDelete = product;
  }

  deleteCustomer(deleteModal: ModalDirective, success: ModalDirective) {
    this.service.deleteProduct(this.productDelete.id).subscribe(() => {
      deleteModal.hide();
      success.show();
      this.loadAll();
    }, err => {
      console.log(err);
      deleteModal.hide();
    });
  }

  search(name: string, startDate: string, endDate: string) {
    this.service.findAllProducts(name, startDate, endDate).subscribe(data => {
      this.products = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  pickToDelete(success: ModalDirective) {
    let arr = document.querySelectorAll("input[type='checkbox']:checked");
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += arr[i].value + ',';
    }
    let arrString = str.trim().split(',')
    for (let i = 0; i < arrString.length - 1; i++) {
      let num =+ arrString[i];
      this.service.deleteProduct(num).subscribe(()=>{},error => {
        console.log(error);
      }, () => {
        success.show();
        this.loadAll();
      });
    }
  }
}
