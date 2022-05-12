import {Component, OnInit} from '@angular/core';
import {ProductSvService} from "../service/product-sv.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {};
  id:number = 0 ;

  constructor(private service: ProductSvService, private activatedRoute: ActivatedRoute,private router:Router) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = parseInt(param.get('id'));

      this.service.findById(this.id).subscribe((data) => {
        this.product = data;
      }, error => {
        console.log(error)
      });
    })
  }

  ngOnInit(): void {

  }

  deleteProduct() {
    this.service.deleteProduct(this.id).subscribe(()=>{
      alert("success");

    },
      err => {
        console.log(err)
      },() => {
      this.router.navigateByUrl('/product-list');
      })
  }
}
