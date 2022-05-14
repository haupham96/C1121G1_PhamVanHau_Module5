import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number = 0;

  product: Product = {};

  productForm = new FormGroup({});

  constructor(private service: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = parseInt(param.get('id'));
      this.product = this.service.findById(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
      });
    });
  }

  submit() {
    this.product = this.productForm.value;
    this.service.editProduct(this.product);
    this.router.navigate(['product/list']);
  }

}
