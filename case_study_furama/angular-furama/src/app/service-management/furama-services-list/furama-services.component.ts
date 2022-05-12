import {Component, OnInit} from '@angular/core';
import {Service} from "../model/service";

@Component({
  selector: 'app-furama-services',
  templateUrl: './furama-services.component.html',
  styleUrls: ['./furama-services.component.scss']
})
export class FuramaServicesComponent implements OnInit {
  facilities: Array<Service> = [
    {
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
      serviceType: "Villa",
      image:"https://images.squarespace-cdn.com/content/v1/5c9e66e1d7819e21e09450be/1555428812559-HC01OBTZFWNHQ268864H/16-The-Anam---Villas---Pool-View-Villas.jpg?format=1000w"
    },
    {
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
      serviceType: "Villa",
      image:"https://images.squarespace-cdn.com/content/v1/5c9e66e1d7819e21e09450be/1556202882222-CJYBA40TJ22WH90ONI65/25-The-Anam-Villas---Three-Bedroom-Villa.jpg"
    },
    {
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
      serviceType: "Villa",
      image:"https://mb.cision.com/Public/15396/2220317/9eb0167e13c2681d_org.jpg"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
