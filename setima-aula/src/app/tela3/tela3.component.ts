import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from '../veiculo';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-tela3',
  templateUrl: './tela3.component.html',
  styleUrls: ['./tela3.component.css']
})
export class Tela3Component implements OnInit {

  veiculo: Veiculo

  constructor(private veiculoService: VeiculoService,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      this.veiculo = this.veiculoService.getVeiculoById(id)
    })
  }

}
