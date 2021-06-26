import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = "https://still-atoll-04584.herokuapp.com/customers"

  constructor(private http: HttpClient) { }

  save(customer: Customer) : Observable<Customer> {
    return this.http.post<Customer>(this.url, customer)
  } 

  findAll() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url)
  }

  deleteCustomer(customerId: number) : Observable<Customer> {
    return this.http.delete<Customer>(this.url + "/" + customerId)
  }

}
