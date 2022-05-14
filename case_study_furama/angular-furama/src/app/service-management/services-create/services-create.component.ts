import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../model/rent-type';
import {ServiceType} from '../model/service-type';
import {ServicesService} from '../service/services.service';
import {Service} from '../model/service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.scss']
})
export class ServicesCreateComponent implements OnInit {

  changeType: ServiceType = {id: 1, name: 'Villa'};

  rentTypes: RentType[] = [];
  serviceTypes: ServiceType[] = [];

  serviceForm = new FormGroup({
    id: new FormControl(),
  });

  constructor(private servicesService: ServicesService, private router: Router) {
    this.rentTypes = this.servicesService.rentTypes;
    this.serviceTypes = this.servicesService.serviceTypes;

    this.serviceForm = new FormGroup({
      id: new FormControl(''),
      area: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
      floor: new FormControl(''),
      maxPeople: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
      name: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z]+[ ]?){1,250}$')]),
      otherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]),
      serviceCode: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      rentType: new FormControl(this.rentTypes[0], [Validators.required]),
      serviceType: new FormControl(this.serviceTypes[0], [Validators.required]),
      image: new FormControl('https://mb.cision.com/Public/15396/2220317/9eb0167e13c2681d_org.jpg'),
    });
    this.checkServiceTypeValidate(this.changeType.id);
  }

  get id() {
    return this.serviceForm.get('id');
  }

  get area() {
    return this.serviceForm.get('area');
  }

  get floor() {
    return this.serviceForm.get('floor');
  }

  get maxPeople() {
    return this.serviceForm.get('maxPeople');
  }

  get name() {
    return this.serviceForm.get('name');
  }

  get otherConvenience() {
    return this.serviceForm.get('otherConvenience');
  }

  get poolArea() {
    return this.serviceForm.get('poolArea');
  }

  get price() {
    return this.serviceForm.get('price');
  }

  get serviceCode() {
    return this.serviceForm.get('serviceCode');
  }

  get standardRoom() {
    return this.serviceForm.get('standardRoom');
  }

  get rentTypeId() {
    return this.serviceForm.get('rentTypeId');
  }

  get serviceTypeId() {
    return this.serviceForm.get('serviceTypeId');
  }

  ngOnInit(): void {
  }

  createService() {
    const service: Service = Object.assign({}, this.serviceForm.value);
    console.log(service);
    this.servicesService.save(service);
    alert('Create Success!');
    this.router.navigate(['/services-list']);
  }

  changeServiceType() {
    this.changeType = this.serviceForm.get('serviceType').value;
    this.checkServiceTypeValidate(this.changeType.id);
  }

  checkServiceTypeValidate(changeType: number) {
    if (changeType === 2) {
      this.serviceForm.get('floor').enable();
      this.serviceForm.get('poolArea').disable();

      this.serviceForm.get('floor').setValidators([Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]);

      this.serviceForm.get('floor').updateValueAndValidity();
    }
    if (changeType === 1) {
      this.serviceForm.get('floor').enable();
      this.serviceForm.get('poolArea').enable();

      this.serviceForm.get('floor').setValidators([Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]);
      this.serviceForm.get('poolArea').setValidators([Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]);

      this.serviceForm.get('floor').updateValueAndValidity();
      this.serviceForm.get('poolArea').updateValueAndValidity();
    }
    if (changeType === 3) {

      this.serviceForm.get('floor').disable();
      this.serviceForm.get('poolArea').disable();

    }
  }
}
