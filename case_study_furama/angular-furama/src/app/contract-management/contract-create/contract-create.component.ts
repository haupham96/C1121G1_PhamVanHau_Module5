import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../service/contract.service';
import {CustomerService} from '../../customer-management/service/customer.service';
import {ServicesService} from '../../service-management/service/services.service';
import {Router} from '@angular/router';
import {Service} from '../../service-management/model/service';
import {Customer} from '../../customer-management/model/customer';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[] = [];

  services: Service[] = [];

  contractForm = new FormGroup({
    id: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    customer: new FormControl(),
    service: new FormControl(),
    deposit: new FormControl(),
  });

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private servicesService: ServicesService,
              private router: Router) {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
      this.servicesService.getServicesList().subscribe(dataSV => {
        for(let i=0;i<dataSV.length;i++){
          if(dataSV[i].serviceType.id !== 3){
            this.services.push(dataSV[i]);
          }
        }
        console.log(this.services);
        this.contractForm = new FormGroup({
          id: new FormControl(''),
          startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
          endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
          customer: new FormControl(this.customers[0]),
          service: new FormControl(this.services[0]),
          deposit: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
        });
      }, err => {
        console.log(err);
      });
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {

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

  get deposit() {
    return this.contractForm.get('deposit');
  }

  createContract() {
    const contract = Object.assign({}, this.contractForm.value);
    this.contractService.save(contract).subscribe(() => {
      alert('Create Success!');
      this.router.navigate(['/contract-list']);
    }, err => {
      console.log(err);
    });
  }

}
