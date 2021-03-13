import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'univas 2021'
  year : number
  product : Product
  customers : Customer[]

  constructor() {
    console.log('estou dentro do construtor')
  }

  ngOnInit() {
    console.log('estou dentro do ngOnInit')
    this.year = 2025
    this.product = new Product()
    this.product.productName = 'Caneta'
    this.product.productPrice = 5.99
    this.product.productColor = 'Azul'
    this.customers = []
    
    for (let i = 0; i < 3; i++) {
      let customer = new Customer()
      customer.nome = 'Customer ' + i
      customer.cpf = '123456789' + i
      customer.email = 'customer' + i + '@gmail.com'
      this.customers.push(customer)
    }
  }

}
