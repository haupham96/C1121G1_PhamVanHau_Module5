import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Array<Customer> = [
    {
      id: 1,
      customerCode: 'KH-0001',
      name: 'Hau1',
      birthday: '2000-01-01',
      gender: 1,
      idCard: '111111111',
      phone: '000000001',
      email: 'hau1@gmail.com',
      address: '1NX DN',
      customerTypeId: 1
    },
    {
      id: 2,
      customerCode: 'KH-0002',
      name: 'Hau2',
      birthday: '2000-02-02',
      gender: 1,
      idCard: '222222222',
      phone: '000000002',
      email: 'hau2@gmail.com',
      address: '2NX DN',
      customerTypeId: 2
    },
    {
      id: 3,
      customerCode: 'KH-0003',
      name: 'Hau3',
      birthday: '2000-03-03',
      gender: 0,
      idCard: '333333333',
      phone: '000000003',
      email: 'hau3@gmail.com',
      address: '3NX DN',
      customerTypeId: 3
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
