import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../person";
import {age18, minLength6} from "../gte.validator";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countryArr = ['DN', 'HCM', 'HN'];

  content = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [minLength6, Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, minLength6]),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, age18]),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.pattern("^\\+84\\d{9,10}$"), Validators.required])
  })

  get email() {
    return this.content.get('email');
  }

  get password() {
    return this.content.get('password')
  }

  get confirmPassword() {
    return this.content.get('confirmPassword')
  }

  get country() {
    return this.content.get('country');
  }

  get age() {
    return this.content.get('age');
  }

  get gender() {
    return this.content.get('gender')
  }

  get phone() {
    return this.content.get('phone');
  }


  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    let person: Person = Object.assign({}, this.content.value);
    console.log(person);
  }

  check() {
    if (this.content.get('password').value !== this.content.get('confirmPassword').value) {
        this.content.get('confirmPassword').setErrors({notMatch:'Not Match With Passowrd !'});
    }
  }
}
