import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {minLength6} from "../gte.validators";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, minLength6])
  });

  get email(){
    return this.login.get('email');
  }

  get password(){
    return this.login.get('password');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.login.value);
  }
}
