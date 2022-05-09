import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  content = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  });

  contacts: Contact[] = [
    {name: 'Hau1', email: 'hau1@gmail.com', address: '166NX'},
    {name: 'Hau2', email: 'hau2@gmail.com', address: '266NX'},
    {name: 'Hau3', email: 'hau3@gmail.com', address: '366NX'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.content.value)
    let temp: Contact = Object.assign({}, this.content.value);
    // console.log(temp);
    this.contacts.push(temp);
    console.log(this.contacts[this.contacts.length-1]);
  }

}
