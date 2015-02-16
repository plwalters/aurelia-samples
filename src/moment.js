import {Behavior} from 'aurelia-templating';
import moment from 'moment';

class DateAttachedBehavior {
  static metadata(){
    return Behavior
      .attachedBehavior('date')
      .withProperty('value', 'valueChanged', 'date');
  }

  static inject() { return [Element]; }

  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue){
    this.element.innerHTML = moment(newValue).format('LL');
  }
}

class TimeAttachedBehavior {
  static metadata(){
    return Behavior
      .attachedBehavior('time')
      .withProperty('value', 'valueChanged', 'time');
  }

  static inject() { return [Element]; }

  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue){
    this.element.innerHTML = moment(newValue).format('LT');
  }
}

class DateTimeAttachedBehavior {
  static metadata(){
    return Behavior
      .attachedBehavior('date-time')
      .withProperty('value', 'valueChanged', 'date-time');
  }

  static inject() { return [Element]; }

  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue){
    console.log('showing it')
    this.element.innerHTML = moment(newValue).format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
}

export {
  DateAttachedBehavior,
  TimeAttachedBehavior,
  DateTimeAttachedBehavior
}