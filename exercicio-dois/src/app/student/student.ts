export class Student {

  id: number
  nome: string
  cpf: string
  celular: string

  constructor(nome?: string, cpf?: string, celular?: string) {
    this.id = (new Date()).getTime()
    this.nome = nome
    this.cpf = cpf
    this.celular = celular
  }
}