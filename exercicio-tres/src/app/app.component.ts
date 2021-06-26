import { Component } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  customers: Customer[] = []
  newCustomer: Customer = {} as Customer

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadData()
  }

  save(myForm: any) {
    this.newCustomer.id = (new Date()).getTime()
    this.customerService.save(this.newCustomer).subscribe(
      () => {
        myForm.reset()
        this.newCustomer = {} as Customer
        this.loadData()
      }
    )
  }

  loadData() {
    this.customerService.findAll().subscribe(
      data => this.customers = data
    )
  }

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe(
      () => this.loadData()
    )
  }

}
