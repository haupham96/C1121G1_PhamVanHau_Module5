import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../service/product-service.service";
import {Router} from "@angular/router";
import {Category} from "../model/category";
import {Product} from "../model/product";
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  @Input('successModal') successModal: ModalDirective;

  message = '';
  categories: Category[] = [];

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    category: new FormControl()
  });

  constructor(private service: ProductServiceService, private router: Router) {
    this.service.findAllCategories().subscribe(data => {
      this.categories = data;
      this.productForm.get('category').setValue(this.categories[0]);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  createProduct(basicModal: ModalDirective, errorModal: ModalDirective) {

    if (this.productForm.valid) {
      let product: Product = Object.assign({}, this.productForm.value);
      this.service.createProduct(product).subscribe(() => {
          basicModal.show();
        }, error => {
          console.log(error);
          errorModal.show();
          this.router.navigate(['/product/create']);
        }
      )
    }

  }

  validateDateBefore() {
    let date1 = new Date(this.productForm.get('startDate').value);
    let date2 = new Date(this.productForm.get('endDate').value);
    if (date1?.getTime() >= date2?.getTime()) {
      this.productForm.get('endDate').setErrors({dateBefore: true});
    }
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
}
