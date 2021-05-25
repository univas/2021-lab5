export class Teacher {

  id: number
  nome: string
  cpf: string
  email: string

  constructor(nome?: string, cpf?: string, email?: string) {
    this.id = (new Date()).getTime()
    this.nome = nome
    this.cpf = cpf
    this.email = email
  }
}