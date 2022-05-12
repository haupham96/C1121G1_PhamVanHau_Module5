import { Component, OnInit } from '@angular/core';
import {ProductSvService} from "../service/product-sv.service";
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  constructor(private service:ProductSvService,private router:Router) {
  }

  ngOnInit(): void {

  }

  submitForm() {
    let product:Product = Object.assign({},this.productForm.value);
    this.service.saveProduct(product).subscribe(()=> {
      this.productForm.reset();
      alert('Success!');
    },error => {
      console.log(error)},()=>{this.router.navigateByUrl('/product-list');})
  }
}
