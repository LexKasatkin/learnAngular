export class Timer {
  private readonly interestingEvent: Date;//примечательное событие
  timeBeforeTheEvent: Date;//оставшееся время до примечательного события
  timerId: number;

  constructor(interestingEvent: Date) {
    this.interestingEvent = interestingEvent;
    this.timeBeforeTheEvent = new Date();
  }


  getInterestingEvent(): Date {
    return this.interestingEvent;
  }

  getTimeBeforeTheEvent(): Date {
    return this.timeBeforeTheEvent;
  }

  getTimerId(): number {
    return this.timerId;
  }
}
