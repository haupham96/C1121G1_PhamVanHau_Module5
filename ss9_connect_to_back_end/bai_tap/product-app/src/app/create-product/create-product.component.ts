import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import {Product} from "../model/product";
import {Category} from "../model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('')
  });

  categories: Category[] = [];

  constructor(private service: ProductService, private router: Router) {
    this.service.findAllCategory().subscribe(data => {
      this.categories = data;
      this.productForm.get('category').setValue(this.categories[0]);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  createProduct() {
    let product: Product = Object.assign({}, this.productForm.value);
    this.service.createProduct(product).subscribe(() => {
      this.router.navigate(['/product-list'])
      alert('success !');
    }, err => {
      console.log(err);
    })
  }

}
