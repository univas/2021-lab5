import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.component.html',
  styleUrls: ['./tela2.component.css']
})
export class Tela2Component implements OnInit {

  veiculos: Veiculo[]

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculos = this.veiculoService.veiculos
  }
}
