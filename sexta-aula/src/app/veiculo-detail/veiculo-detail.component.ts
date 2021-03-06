import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-veiculo-detail',
  templateUrl: './veiculo-detail.component.html',
  styleUrls: ['./veiculo-detail.component.css']
})
export class VeiculoDetailComponent implements OnInit {

  @Input()
  veiculo: Veiculo

  constructor() { }

  ngOnInit(): void {
  }

}
