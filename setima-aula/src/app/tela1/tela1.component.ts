import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.component.html',
  styleUrls: ['./tela1.component.css']
})
export class Tela1Component implements OnInit {

  newVeiculo: Veiculo

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.newVeiculo = new Veiculo()
  }

  saveVeiculo(form) {
    this.veiculoService.saveVeiculo(this.newVeiculo)
    this.newVeiculo = new Veiculo()
    form.reset()
  }

}
