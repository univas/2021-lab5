import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = 'Rodrigo'
  className = 'blue'
  email: string = 'seu_email@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return 'UNIVAS 2021'
  }

  printHello() {
    if (this.className === 'blue') {
      this.className = 'green'
    } else {
      this.className = 'blue'
    }
    alert('Hello!!!')
  }

  confirmEmail() {
    if (confirm(`Confirma o email: ${this.email}`)) {
      alert('email enviado com sucesso!')
    }
  }
}
