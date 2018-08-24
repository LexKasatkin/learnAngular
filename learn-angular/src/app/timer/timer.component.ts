import {Component, OnDestroy, OnInit} from '@angular/core';
import {Timer} from './timer'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  private readonly timer: Timer;

  constructor(){
    this.timer=new Timer(new Date(2022,5,24));
  }


  ngOnInit() {
    this.timer.timerId = setInterval(() => this.setDeltaTime(), 1000);
  }

  setDeltaTime() {
    this.timer.timeBeforeTheEvent.setTime(
      this.timer.getInterestingEvent().getTime() - new Date().getTime()
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.timer.getTimerId());
  }

  getTimer() {
    return this.timer;
  }

}
