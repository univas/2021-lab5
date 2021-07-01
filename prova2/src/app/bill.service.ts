import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private SERVER_URL = 'https://calm-anchorage-20290.herokuapp.com/api/v1/bills'

  constructor(private http: HttpClient) { }

  save(bill: Bill) : Observable<Bill> {
    return this.http.post<Bill>(this.SERVER_URL, bill)
  }

  findBillsByCustomerName(customerName: string) : Observable<Bill[]> {
    return this.http.get<Bill[]>(this.SERVER_URL + '?customer=' + customerName)
  }

  deleteBillById(billId: number) : Observable<Bill> {
    return this.http.delete<Bill>(this.SERVER_URL + '/' + billId)
  }
}
