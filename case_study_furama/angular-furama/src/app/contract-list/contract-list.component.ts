import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";
import {Customer} from "../model/customer";
import {Facilities} from "../model/facilities";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {
  contracts: Array<Contract> = [
    {
      id: 1, startDate: "2000-01-01", endDate: "2000-01-11", totalMoney: "1000",
      customer: {
        id: 1,
        customerCode: "KH-0001",
        name: "Hau1",
        birthday: "2000-01-01",
        gender: 1,
        idCard: "111111111",
        phone: "000000001",
        email: "hau1@gmail.com",
        address: "1NX DN",
        customerType: "Diamond"
      },
      employee: "Hau1",
      service: {
        id: 3,
        serviceCode: "DV-0003",
        name: "Villa New 3",
        area: "700",
        price: "30000",
        maxPeople: "3",
        standardRoom: "Vip",
        otherConvenience: "All",
        poolArea: "100",
        floor: "3",
        rentType: "Day",
        serviceType: "Villa"
      },
      deposit: "500"
    },
    {
      id: 2, startDate: "2000-02-02", endDate: "2000-02-22", totalMoney: "2000",
      customer: {
        id: 2,
        customerCode: "KH-0002",
        name: "Hau2",
        birthday: "2000-02-02",
        gender: 1,
        idCard: "222222222",
        phone: "000000002",
        email: "hau2@gmail.com",
        address: "2NX DN",
        customerType: "Platinum"
      },
      employee: "Hau2",
      service: {
        id: 1,
        serviceCode: "DV-0001",
        name: "Villa New 1",
        area: "500",
        price: "10000",
        maxPeople: "4",
        standardRoom: "Vip",
        otherConvenience: "All",
        poolArea: "100",
        floor: "2",
        rentType: "Day",
        serviceType: "Villa"
      },
      deposit: "1500"
    },
    {
      id: 3, startDate: "2000-03-03", endDate: "2000-03-33", totalMoney: "3000",
      customer: {
        id: 3,
        customerCode: "KH-0003",
        name: "Hau3",
        birthday: "2000-013-03",
        gender: 0,
        idCard: "333333333",
        phone: "000000003",
        email: "hau3@gmail.com",
        address: "3NX DN",
        customerType: "Gold"
      },
      employee: "Hau3",
      service: {
        id: 2,
        serviceCode: "DV-0002",
        name: "Villa New 2",
        area: "600",
        price: "20000",
        maxPeople: "2",
        standardRoom: "Vip",
        otherConvenience: "All",
        poolArea: "100",
        floor: "1",
        rentType: "Day",
        serviceType: "Villa"
      },
      deposit: "2000"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
