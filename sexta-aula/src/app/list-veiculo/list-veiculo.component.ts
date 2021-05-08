import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-list-veiculo',
  templateUrl: './list-veiculo.component.html',
  styleUrls: ['./list-veiculo.component.css']
})
export class ListVeiculoComponent implements OnInit {

  veiculos: Veiculo[]
  selectedVeiculo: Veiculo

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculos = this.veiculoService.veiculos
  }

  showVeiculoDetail(veiculoId: number) {
    this.selectedVeiculo = this.veiculoService.getVeiculoById(veiculoId);
  }

}
