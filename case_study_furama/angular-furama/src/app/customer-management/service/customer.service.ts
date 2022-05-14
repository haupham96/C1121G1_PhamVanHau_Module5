import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerTypes: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ];

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
      customerType: this.customerTypes[0]
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
      customerType: this.customerTypes[1]
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
      customerType: this.customerTypes[2]
    },
  ];


  constructor() {
  }

  deleteById(idDelete: number) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === idDelete) {
        this.customers.splice(i, 1);
      }
    }
  }

  save(customer: Customer) {
    this.customers.push(customer);
  }

  findById(id: number): Customer {
    for (const c of this.customers) {
      if (c.id === id) {
        return c;
      }
    }
    return null;
  }

  editCustomer(customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === customer.id) {
        this.customers[i] = customer;
        break;
      }
    }
  }

}
