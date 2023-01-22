import {action, computed, flow, makeAutoObservable, observable} from 'mobx';

class Profile {
  information = {
    name: '',
    age: 18,
    type: 0,
  };

  constructor() {
    makeAutoObservable(this, {
      information: observable,
      setName: action,
      getAge: computed,
      fetch: flow,
    });
  }

  get getAge() {
    return this.information.age + 1;
  }

  setName(name: string) {
    this.information.name = name;
  }
  *fetch(): any {
    const response = yield fetch('/api/profle');
    this.information = response.json();
  }
}

export interface ProfileType extends Profile {}

export const profile = new Profile();
