import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';
  counter = 5 ;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
