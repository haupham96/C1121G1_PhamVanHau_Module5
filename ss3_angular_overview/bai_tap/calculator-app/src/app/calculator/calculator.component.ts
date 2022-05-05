import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: string = '0';
  num2: string = '0';
  result: string = '0';

  add() {
    let cal = parseInt(this.num1) + parseInt(this.num2);
    this.result = String(cal);
  }

  sub() {
    let cal = parseInt(this.num1) - parseInt(this.num2);
    this.result = String(cal);
  }

  div() {
    if (this.num2 == '0') {
      this.result = "Math Error";
    } else {
      let cal = parseInt(this.num1) / parseInt(this.num2);
      this.result = String(cal);
    }
  }

  mul() {
    let cal = parseInt(this.num1) * parseInt(this.num2);
    this.result = String(cal);
  }


  constructor() {
  }

  ngOnInit(): void {
  }


}
