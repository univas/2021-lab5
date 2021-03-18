import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  productDetail : Product

  @Output()
  productChange = new EventEmitter()

  counter : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  changeClick() {
    this.counter++
    this.productChange.emit({value: this.counter})
  }

}
