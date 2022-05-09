import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input()
  count:number;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let property in changes){
      if(property === 'count'){
        console.log('Previous :',changes[property].previousValue)
        console.log('Current :',changes[property].currentValue)
        console.log('First Change : ',changes[property].firstChange)
      }
    }
  }

  increase() {

  }

  decrease() {

  }
}
