import { Component } from '@angular/core';
import { Bill } from './bill';
import { BillService } from './bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newBill: Bill = {} as Bill
  customerBills: Bill[] = []
  customerName: string = ''

  constructor(private billService: BillService) {}

  ngOnInit() {
  }

  save(myForm: any) {
    this.billService.save(this.newBill).subscribe(
      () => {
        myForm.reset()
        this.newBill = {} as Bill
        alert('Fatura cadastrada com sucesso!')
      }
    )
  }

  loadData() {
    this.billService.findBillsByCustomerName(this.customerName).subscribe(
      data => this.customerBills = data
    )
  }

  searchByCustomerName(myForm: any) {
    this.loadData()
    myForm.reset()
    this.customerName = ''
  }

  removeBill(billId: number) {
    this.billService.deleteBillById(billId).subscribe(
      () => this.loadData()
    )
  }
}
