import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../model/category";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl()
  });

  categories: Category[] = [];

  constructor(private service: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.service.findAllCategory().subscribe(data => {
      this.categories = data;
      let id = 0;
      this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
        id = +param.get('id');
        this.service.findProductById(id).subscribe(data => {
          this.productForm.get('id').setValue(data.id);
          this.productForm.get('name').setValue(data.name);
          this.productForm.get('price').setValue(data.price);
          this.productForm.get('category').setValue(data.category);
        })
      }, error => {
        console.log(error);
      })
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  compare(t1: Category, t2: Category): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  editProduct() {
    let product: Product = Object.assign({}, this.productForm.value);
    this.service.eidtProduct(product).subscribe(() => {
      this.router.navigate(['/product-list']);
      alert('Edit Success !');
    }, err => {
      console.log(err);
      alert('ERROR !')
    });
  }
}
