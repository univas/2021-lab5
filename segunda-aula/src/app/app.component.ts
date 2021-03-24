import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  customerOne: Customer
  customerTwo: Customer
  customerThree: Customer
  customerSelected: Customer

  ngOnInit() {
    this.customerOne = new Customer('João', 'joao@gmail.com', '1234-4321')
    this.customerTwo = new Customer('Maria', 'maria@gmail.com', '4444-3333')
    this.customerThree = new Customer('José', 'jose@gmail.com', '8888-7777')
  }

  selectCustomer(customer: Customer) {
    this.customerSelected = customer
  }

}
