import jquery from 'jquery';
import ko from 'knockout';

export class Welcome{

  static inject() {
    return [Element];
  }

	constructor(element){
    var self = this;
    this.element = element;
		this.heading = ko.observable('Welcome to the Aurelia Navigation App - With Knockout!');
    this.firstName = ko.observable('John');
    this.lastName = ko.observable('Doe');
    this.fullName = ko.computed(function () {
      return self.firstName() + ' ' + self.lastName();
    });
	}

  welcome(){
    alert('Welcome, ' + this.firstName() + '!');
  }

  attached(element){
    // Expected to pass element in but it is undefined
    ko.applyBindings(this, jquery('#knockout-template')[0]);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}