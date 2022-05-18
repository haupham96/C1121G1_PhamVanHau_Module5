import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../service/product-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ModalDirective} from "angular-bootstrap-md";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  categories: Category[] = [];

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    category: new FormControl()
  });

  constructor(private service: ProductServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.service.findAllCategories().subscribe(data => {
      this.categories = data;
      this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
        let id = +param.get('id');
        this.service.findProductById(id).subscribe((data) => {
            this.productForm.get('category').setValue(data.category);
            this.productForm.get('id').setValue(data.id);
            this.productForm.get('name').setValue(data.name);
            this.productForm.get('price').setValue(data.price);
            this.productForm.get('startDate').setValue(data.startDate);
            this.productForm.get('endDate').setValue(data.endDate);
          }, err => {
            console.log(err);
          }
        )
      })
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  validateDateBefore() {
    let date1 = new Date(this.startDate.value);
    let date2 = new Date(this.endDate.value);
    if (date1 >= date2) {
      this.productForm.get('endDate').setErrors({dateBefore: true});
    }
  }

  compare(t1: Category, t2: Category): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get startDate() {
    return this.productForm.get('startDate');
  }

  get endDate() {
    return this.productForm.get('endDate');
  }

  editProduct(basicModal: ModalDirective, errorModal: ModalDirective) {
    if (this.productForm.valid) {
      let product: Product = Object.assign({}, this.productForm.value);
      this.service.editProduct(product).subscribe(() => {
        basicModal.show();
      }, err => {
        console.log(err);
        errorModal.show();
      })
    }

  }
}
