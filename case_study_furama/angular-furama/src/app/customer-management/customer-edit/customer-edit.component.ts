import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerTypes = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'}
  ];

  customerForm = new FormGroup({
    id: new FormControl(''),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
    name: new FormControl('', Validators.required),
    birthday: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
    gender: new FormControl(0, Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{11}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^((090)|(091)|(\\+8490)|(\\+8491))\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    customerType: new FormControl(1, Validators.required),
  });

  get id() {
    return this.customerForm.get('id');
  }

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  constructor() { }

  ngOnInit(): void {
  }

  editCustomer() {
    console.log(this.customerForm.value);
  }

}
