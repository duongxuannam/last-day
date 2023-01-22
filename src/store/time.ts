import {action, makeAutoObservable} from 'mobx';

class Time {
  currentTime = '';

  constructor() {
    makeAutoObservable(this, {
      setTime: action,
    });
  }

  setTime(current: string) {
    this.currentTime = current;
  }
}

export interface TimeType extends Time {}

export const time = new Time();
