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

  page = 0;
  totalPages = 0;

  services: Service[] = [];

  constructor(private servicesService: ServicesService) {
    this.servicesService.getAllServices(this.page).subscribe(data => {
      this.services = data.content;
      this.services.map(item => item.image = 'https://mb.cision.com/Public/15396/2220317/9eb0167e13c2681d_org.jpg');
      this.page = data.number;
      this.totalPages = data.totalPages;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  next() {
    if (this.page < this.totalPages - 1) {
      this.servicesService.getAllServices(this.page + 1).subscribe(data => {
          this.services = data.content;
          this.services.map(item => item.image = 'https://mb.cision.com/Public/15396/2220317/9eb0167e13c2681d_org.jpg');
          this.page = data.number;
        }, err => {
          console.log(err);
        }
      );
    }
  }

  previous() {
    if (this.page > 0) {
      this.servicesService.getAllServices(this.page - 1).subscribe(data => {
        this.services = data.content;
        this.services.map(item => item.image = 'https://mb.cision.com/Public/15396/2220317/9eb0167e13c2681d_org.jpg');
        this.page = data.number;
      }, err => {
        console.log(err);
      });
    }
  }

  getInforDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteService(basicModal: ModalDirective) {
    this.servicesService.deleteById(this.idDelete).subscribe(() => {
      basicModal.hide();
      window.location.reload();
      alert('Delete Sucess !');
    }, err => {
      console.log(err);
      alert('Delete Failed !');
    });
  }

}
