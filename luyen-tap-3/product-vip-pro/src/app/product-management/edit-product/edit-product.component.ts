import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ModalDirective} from "angular-bootstrap-md";
import {Product} from "../../model/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  categories: Category[] = [];
  product: Product = {};

  productForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('^(SP-)[0-9]{4}$')]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
      this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
        let id = +param.get('id');
        this.productService.findProductById(id).subscribe(data => {
          this.product = data;
          this.productForm = new FormGroup({
            id:new FormControl(this.product.id,Validators.required),
            code: new FormControl(this.product.code, [Validators.required, Validators.pattern('^(SP-)[0-9]{4}$')]),
            name: new FormControl(this.product.name, [Validators.required]),
            price: new FormControl(this.product.price, [Validators.required]),
            startDate: new FormControl(this.product.startDate, [Validators.required]),
            endDate: new FormControl(this.product.endDate, [Validators.required]),
            category: new FormControl(this.product.category, [Validators.required]),
          });
        });
      })

    });
  }

  ngOnInit(): void {

  }

  editProduct(errorModal: ModalDirective, success: ModalDirective) {
    this.product = Object.assign({}, this.productForm.value);
    if (this.productForm.valid) {
      this.productService.editProduct(this.product).subscribe(() => {
        success.show();
      }, err => {
        errorModal.show();
        console.log(err)
      })
    }
  }

  compare(t1: Category, t2: Category) {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
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
