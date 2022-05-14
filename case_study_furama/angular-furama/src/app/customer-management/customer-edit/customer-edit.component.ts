import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/customer-type';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerTypes: CustomerType[] = [];

  customer: Customer = {};

  customerForm = new FormGroup({
    id: new FormControl(''),
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

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.customer = this.customerService.findById(id);
    });
    this.customerTypes = this.customerService.customerTypes;
    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      customerCode: new FormControl(this.customer.customerCode, [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      name: new FormControl(this.customer.name, Validators.required),
      birthday: new FormControl(this.customer.birthday, [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
      gender: new FormControl(this.customer.gender, Validators.required),
      idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^\\d{9}|\\d{11}$')]),
      phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^((090)|(091)|(\\+8490)|(\\+8491))\\d{7}$')]),
      email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
      address: new FormControl(this.customer.address, Validators.required),
      customerType: new FormControl(this.customer.customerType, Validators.required),
    });
  }

  compareFn(t1: CustomerType, t2: CustomerType) {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  ngOnInit(): void {
  }

  editCustomer() {
    const customer: Customer = Object.assign({}, this.customerForm.value);
    this.customerService.editCustomer(customer);
    alert('Edit Success!');
    this.router.navigate(['/customer-list']);

  }

}
