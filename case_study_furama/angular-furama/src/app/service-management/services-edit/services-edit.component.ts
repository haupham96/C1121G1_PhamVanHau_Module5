import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServicesService} from '../service/services.service';
import {RentType} from '../model/rent-type';
import {ServiceType} from '../model/service-type';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Service} from '../model/service';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.scss']
})
export class ServicesEditComponent implements OnInit {

  changeType: ServiceType = {id: 1, name: 'Villa'};

  rentTypes: RentType[] = [];

  serviceTypes: ServiceType[] = [];

  service: Service = {};

  serviceForm = new FormGroup({
    id: new FormControl(''),
  });

  constructor(private servicesService: ServicesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.service = this.servicesService.findById(id);
      this.changeType = this.service.serviceType;
    });
    this.rentTypes = this.servicesService.rentTypes;
    this.serviceTypes = this.servicesService.serviceTypes;
    this.serviceForm = new FormGroup({
      id: new FormControl(this.service.id),
      area: new FormControl(this.service.area, [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
      floor: new FormControl(this.service.floor, [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
      maxPeople: new FormControl(this.service.maxPeople, [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
      name: new FormControl(this.service.name, [Validators.required, Validators.pattern('^([a-zA-Z]+[ ]?){1,250}$')]),
      otherConvenience: new FormControl(this.service.otherConvenience, [Validators.required]),
      poolArea: new FormControl(this.service.poolArea, [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
      price: new FormControl(this.service.price, [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]),
      serviceCode: new FormControl(this.service.serviceCode, [Validators.required]),
      standardRoom: new FormControl(this.service.standardRoom, [Validators.required]),
      rentType: new FormControl(this.service.rentType, [Validators.required]),
      serviceType: new FormControl(this.service.serviceType, [Validators.required]),
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

  compareFn(t1: any, t2: any) {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  editService() {
    const service: Service = Object.assign({}, this.serviceForm.value);
    console.log(service);
    this.servicesService.edit(service);
  }

  serviceTypeChange() {
    this.changeType = this.serviceForm.get('serviceType').value;
    this.checkServiceTypeValidate(this.changeType.id);
  }

  checkServiceTypeValidate(changeType: number) {
    if (changeType === 2) {
      this.serviceForm.get('floor').enable();

      this.serviceForm.get('floor').setValidators([Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*$)')]);

      this.serviceForm.get('poolArea').disable();

      this.serviceForm.get('floor').updateValueAndValidity();
      this.serviceForm.get('poolArea').updateValueAndValidity();
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

      this.serviceForm.get('floor').updateValueAndValidity();
      this.serviceForm.get('poolArea').updateValueAndValidity();
    }
  }

}
