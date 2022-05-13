import {Component, OnInit} from '@angular/core';
import {Service} from '../model/service';
import {ServicesService} from '../service/services.service';

@Component({
  selector: 'app-furama-services',
  templateUrl: './furama-services.component.html',
  styleUrls: ['./furama-services.component.scss']
})
export class FuramaServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private servicesService: ServicesService) {
    this.services = this.servicesService.services;
  }

  ngOnInit(): void {
  }

}
