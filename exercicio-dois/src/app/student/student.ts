export class Student {

  nome: string
  cpf: string
  celular: string

  constructor(nome?: string, cpf?: string, celular?: string) {
    this.nome = nome
    this.cpf = cpf
    this.celular = celular
  }
}