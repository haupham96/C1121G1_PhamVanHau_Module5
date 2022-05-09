import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
  count = 5;

  incresement() {
    this.count++;
  }

  decreasement(){
    this.count--;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
