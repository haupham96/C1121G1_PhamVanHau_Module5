import {Component, OnInit} from '@angular/core';
import {Service} from '../model/service';
import {ServicesService} from '../service/services.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-furama-services',
  templateUrl: './furama-services.component.html',
  styleUrls: ['./furama-services.component.scss']
})
export class FuramaServicesComponent implements OnInit {

  idDelete = 0;
  nameDelete = '';

  services: Service[] = [];

  constructor(private servicesService: ServicesService) {
    this.services = this.servicesService.services;
  }

  ngOnInit(): void {
  }

  getInforDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteService(basicModal: ModalDirective) {
    this.servicesService.deleteById(this.idDelete);
    basicModal.hide();
    alert('Delete Sucess !');
  }
}
