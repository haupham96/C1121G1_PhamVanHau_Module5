import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  findAllCustomer(page: number): Observable<any> {
    return this.http.get<any>(`${this.url}/customer?page=${page}`);
  }

  getCustomerList(): Observable<any> {
    return this.http.get<any>(`${this.url}/customer/list`);
  }

  deleteById(idDelete: number): Observable<Customer> {
    return this.http.delete(`${this.url}/customer/delete/${idDelete}`);
  }

  save(customer: Customer): Observable<Customer> {
    return this.http.post(`${this.url}/customer/create`, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/customer/${id}`);
  }

  editCustomer(customer: Customer): Observable<Customer> {
    return this.http.put(`${this.url}/customer/edit/${customer.id}`, customer);
  }

}
