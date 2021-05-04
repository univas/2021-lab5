import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {

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
