import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../../customer-management/service/customer.service';
import {ServicesService} from '../../service-management/service/services.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {

  customers = [];

  services = [];

  employees = [];

  contractForm = new FormGroup({
    id: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    totalMoney: new FormControl(''),
    customer: new FormControl(),
    employee: new FormControl(),
    service: new FormControl(),
    deposit: new FormControl(''),
  });

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private servicesService: ServicesService) {
    this.customers = this.customerService.customers;
    this.employees = this.contractService.employees;
    this.services = this.servicesService.services;

    this.contractForm = new FormGroup({
      id: new FormControl(''),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
      endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
      customer: new FormControl(this.customers[0]),
      employee: new FormControl(this.employees[0]),
      service: new FormControl(this.services[0]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
    });
  }


  get id() {
    return this.contractForm.get('id');
  }

  get startDate() {
    return this.contractForm.get('startDate');
  }

  get endDate() {
    return this.contractForm.get('endDate');
  }

  get totalMoney() {
    return this.contractForm.get('totalMoney');
  }

  get deposit() {
    return this.contractForm.get('deposit');
  }

  ngOnInit(): void {
  }

  createContract() {
    console.log(this.contractForm.value);
  }
}
