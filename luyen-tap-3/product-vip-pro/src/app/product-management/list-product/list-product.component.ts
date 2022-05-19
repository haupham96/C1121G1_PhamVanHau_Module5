import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ModalDirective} from "angular-bootstrap-md";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  page = 0;
  products: Product[] = [];

  product: Product = {};

  constructor(private productService: ProductService, private router: Router) {
    this.loadAll();
  }

  loadAll() {
    this.productService.getAllProducts('', '', '').subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  search(name: string, startDate: string, endDate: string) {
    this.productService.getAllProducts(name, startDate, endDate).subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
    });
  }

  async pickToDelete(success: ModalDirective) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    let arrId: Array<number> = [];
    let temp;
    for (let i = 0; i < checkboxes.length; i++) {
      temp = checkboxes[i];
      temp = +temp.value
      await this.productService.deleteProductById(temp).subscribe(() => {
      }, err => {
        console.log(err)
      },()=>{
        this.loadAll()
      });
    }
    success.show();
  }

  deleteProduct(basicModal: ModalDirective, successModal: ModalDirective) {
    this.productService.deleteProductById(this.product.id).subscribe(() => {
      this.loadAll();
      basicModal.hide();
      successModal.show();
    }, err => {
      basicModal.hide();
      console.log(err);
    })
  }

  sendProductInfor(product: Product) {
    this.product = product;
  }
}
