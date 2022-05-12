import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductSvService} from "../service/product-sv.service";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  product: Product = {};

  constructor(private service: ProductSvService, private activatedRoute: ActivatedRoute,private router:Router) {

    let id = 0;
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => id = parseInt(param.get('id')))
    this.service.findById(id).subscribe((data) => {
      this.product = data;
      this.productForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name)
      })
    });
  }

  ngOnInit(): void {

  }

  editProduct() {
    let product: Product = Object.assign({}, this.productForm.value);
    this.service.eidtProduct(product).subscribe(()=>{
      alert("success!")
    }, err=>{
      console.log(err);
    },()=>{this.router.navigateByUrl('/product-list');})
  }
}
