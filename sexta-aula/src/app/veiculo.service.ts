import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculos: Veiculo[]

  constructor() {
    this.veiculos = []
  }

  saveVeiculo(veiculo: Veiculo) {
    this.veiculos.push(veiculo)
  }

  getVeiculoById(id: number) {
    return this.veiculos.find(v => v.id === id)
  }
}
