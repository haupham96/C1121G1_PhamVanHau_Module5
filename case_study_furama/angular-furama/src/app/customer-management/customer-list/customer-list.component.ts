import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  message = '';

  idDelete = 0;
  nameDelete = '';

  customerTypes: CustomerType[] = [];

  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerTypes = this.customerService.customerTypes;
    this.customers = this.customerService.customers;
  }

  ngOnInit(): void {
  }

  deleteCustomer(basicModal: ModalDirective) {
    this.customerService.deleteById(this.idDelete);
    this.message = 'Delete Sucess !';
    basicModal.hide();
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }


  getIdDeleteAndName(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }
}
