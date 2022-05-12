import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {

  customers = [
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
      customerType: 'Diamond'
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
      customerType: 'Platinum'
    },
    {
      id: 3,
      customerCode: 'KH-0003',
      name: 'Hau3',
      birthday: '2000-013-03',
      gender: 0,
      idCard: '333333333',
      phone: '000000003',
      email: 'hau3@gmail.com',
      address: '3NX DN',
      customerType: 'Gold'
    }
  ];

  service = [
    {
      id: 3,
      serviceCode: 'DV-0003',
      name: 'Villa New 3',
      area: '700',
      price: '30000',
      maxPeople: '3',
      standardRoom: 'Vip',
      otherConvenience: 'All',
      poolArea: '100',
      floor: '3',
      rentType: 'Day',
      serviceType: 'Villa'
    },
    {
      id: 1,
      serviceCode: 'DV-0001',
      name: 'Villa New 1',
      area: '500',
      price: '10000',
      maxPeople: '4',
      standardRoom: 'Vip',
      otherConvenience: 'All',
      poolArea: '100',
      floor: '2',
      rentType: 'Day',
      serviceType: 'Villa'
    },
    {
      id: 2,
      serviceCode: 'DV-0002',
      name: 'Villa New 2',
      area: '600',
      price: '20000',
      maxPeople: '2',
      standardRoom: 'Vip',
      otherConvenience: 'All',
      poolArea: '100',
      floor: '1',
      rentType: 'Day',
      serviceType: 'Villa'
    }
  ];

  employee = [
    {id: 1, name: 'Hau1'},
    {id: 2, name: 'Hau2'},
    {id: 3, name: 'Hau3'},
    {id: 4, name: 'Hau4'},
    {id: 5, name: 'Hau5'},
  ];

  contractForm = new FormGroup({
    id: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    totalMoney: new FormControl(''),
    customerId: new FormControl(1),
    employeeId: new FormControl(1),
    serviceId: new FormControl(1),
    deposit: new FormControl(''),
  });

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

  constructor() {
  }

  ngOnInit(): void {
  }

  createContract() {
    console.log(this.contractForm.value);
  }
}
