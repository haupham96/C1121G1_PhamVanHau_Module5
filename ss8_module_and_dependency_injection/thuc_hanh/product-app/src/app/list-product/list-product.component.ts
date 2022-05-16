import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import {Product} from '../model/product';
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];

  page = 0;

  idDelete = 0;
  nameDelete = '';

  constructor(private service: ProductService,
              private router: Router) {
    this.loadAll();
  }

  loadAll() {
    this.service.findAllProduct().subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  getInfor(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteProduct(basicModal: ModalDirective) {
    this.service.deleteProduct(this.idDelete).subscribe(() => {
      basicModal.hide();
      this.loadAll()
      alert('DELETE SUCCESS !');
    }, err => {
      console.log(err);
    })
  }
}
