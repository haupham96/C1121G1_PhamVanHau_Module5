import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  categories: Category[] = [];

  productForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('^(SP-)[0-9]{4}$')]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
      this.productForm.get('category').setValue(this.categories[0]);
      this.productForm.get('category').setValidators(Validators.required);
    });
  }

  ngOnInit(): void {
  }

  createProduct(errorModal: ModalDirective, success: ModalDirective) {
    let product: Product = Object.assign({}, this.productForm.value);
    if (this.productForm.valid) {
      this.productService.createProduct(product).subscribe(() => {
        success.show();
      }, err => {
        errorModal.show();
        console.log(err)
      })
    }
  }

  get code() {
    return this.productForm.get('code');
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

  validateDateBefore() {
    let date1 = new Date(this.productForm.get('startDate').value);
    let date2 = new Date(this.productForm.get('endDate').value);
    if (date1?.getTime() >= date2?.getTime()) {
      this.productForm.get('endDate').setErrors({dateBefore: true})
    }
  }

  check() {
    let code = this.productForm.get('code').value;
    this.productService.findProductByCode(code).subscribe(data => {
      if (data[0]?.code == code) {
        this.productForm.get('code').setErrors({codeExists: true});
      }
    }, error => {
      console.log(error)
    });
  }
}
