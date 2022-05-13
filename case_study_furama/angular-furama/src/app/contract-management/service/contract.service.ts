import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';
import {Customer} from '../../customer-management/model/customer';
import {Service} from '../../service-management/model/service';
import {Contract} from '../model/contract';
import {CustomerService} from '../../customer-management/service/customer.service';
import {ServicesService} from '../../service-management/service/services.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  employees: Employee[] = [
    {id: 1, name: 'Hau1'},
    {id: 2, name: 'Hau2'},
    {id: 3, name: 'Hau3'},
  ];

  customers: Customer[] = [];

  services: Service[] = [];

  contracts: Contract[] = [];

  constructor(private customerService: CustomerService, private servicesService: ServicesService) {
    this.services = this.servicesService.services;
    this.customers = this.customerService.customers;

    this.contracts = [
      {
        id: 1, startDate: '2000-01-01', endDate: '2000-01-11', totalMoney: '1000',
        customer: this.customers[0],
        employee: this.employees[0],
        service: this.services[0],
        deposit: '500'
      },
      {
        id: 2, startDate: '2000-02-02', endDate: '2000-02-22', totalMoney: '2000',
        customer: this.customers[1],
        employee: this.employees[1],
        service: this.services[1],
        deposit: '1500'
      },
      {
        id: 3, startDate: '2000-03-03', endDate: '2000-03-33', totalMoney: '3000',
        customer: this.customers[2],
        employee: this.employees[2],
        service: this.services[2],
        deposit: '2000'
      },
    ];
  }
}
