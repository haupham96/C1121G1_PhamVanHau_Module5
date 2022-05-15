import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/customer-type';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  customerTypes: CustomerType[] = [];

  message = '';

  customerForm = new FormGroup({
    id: new FormControl(),
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

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerTypes = this.customerService.customerTypes;
    this.customerForm = new FormGroup({
      id: new FormControl(''),
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
      gender: new FormControl(0, Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{11}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^((090)|(091)|(\\+8490)|(\\+8491))\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      customerType: new FormControl(this.customerTypes[0], Validators.required),
    });
  }

  ngOnInit(): void {
  }

  createCustomer() {
    const customer = Object.assign({}, this.customerForm.value);
    this.customerService.save(customer).subscribe(() => {
        alert('Create Success !');
        this.router.navigate(['/customer-list']);
      },
      error => {
        alert('Failed to Create !');
        console.log(error);
      });
  }
}
