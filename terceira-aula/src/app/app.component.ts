import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usuario = {
    name: null,
    email: null
  }

  saveData(form) {
    console.log('Salvando os dados...')
    console.log(this.usuario)
    console.log(form)
  }

}
