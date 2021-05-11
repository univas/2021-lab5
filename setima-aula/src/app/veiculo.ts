export class Veiculo {

  id: number
  marca: string
  modelo: string
  cor: string
  anoFabricacao: number
  anoModelo: number

  constructor() {
    this.id = (new Date()).getTime()
  }

}