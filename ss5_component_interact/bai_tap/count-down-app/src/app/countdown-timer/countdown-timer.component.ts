import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message = '';
  remainingTime: number;
  @Input() seconds = 11;
  @Output() finish = new EventEmitter<boolean>();

  private intervalId = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = (typeof v === "undefined" ? 11 : v);
      const vFixed = Number(v);
      this.seconds = Number.isNaN(v) ? 11 : vFixed;
    }
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  stop() {
    this.clearTimer();
    this.message = `Holding time at ${this.remainingTime} seconds `;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `click Start button to start count down`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = "Blass Off !";
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `T-${this.remainingTime} seconds and counting `;
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}
