import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.scss']
})
export class ServicesEditComponent implements OnInit {

  rentType = [
    {id: 1, name: 'year'},
    {id: 2, name: 'month'},
    {id: 3, name: 'day'},
    {id: 4, name: 'hour'},
  ];

  serviceType = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'},
  ];

  serviceForm = new FormGroup({
    id: new FormControl(''),
    area: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    floor: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{1,250}$')]),
    otherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]),
    serviceCode: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    rentTypeId: new FormControl(4, [Validators.required]),
    serviceTypeId: new FormControl(1, [Validators.required]),
    image: new FormControl('https://mb.cision.com/Public/15396/2220317/9eb0167e13c2681d_org.jpg'),
  });

  get id() {
    return this.serviceForm.get('id');
  }

  get area() {
    return this.serviceForm.get('area');
  }

  get floor() {
    return this.serviceForm.get('floor');
  }

  get maxPeople() {
    return this.serviceForm.get('maxPeople');
  }

  get name() {
    return this.serviceForm.get('name');
  }

  get otherConvenience() {
    return this.serviceForm.get('otherConvenience');
  }

  get poolArea() {
    return this.serviceForm.get('poolArea');
  }

  get price() {
    return this.serviceForm.get('price');
  }

  get serviceCode() {
    return this.serviceForm.get('serviceCode');
  }

  get standardRoom() {
    return this.serviceForm.get('standardRoom');
  }

  get rentTypeId() {
    return this.serviceForm.get('rentTypeId');
  }

  get serviceTypeId() {
    return this.serviceForm.get('serviceTypeId');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  editService() {
    console.log(this.serviceForm.value);
  }

}
