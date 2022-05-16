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
