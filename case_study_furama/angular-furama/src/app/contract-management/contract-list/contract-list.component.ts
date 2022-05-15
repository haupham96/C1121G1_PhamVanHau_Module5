import {Component, OnInit} from '@angular/core';
import {Contract} from '../model/contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];
  page = 1 ;

  constructor(private contractService: ContractService) {
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
      console.log(this.contracts);
    });
  }

  ngOnInit(): void {
  }

}
