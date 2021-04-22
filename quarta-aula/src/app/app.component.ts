import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  studentList: Student[] = []

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      let student = new Student()
      student.nome = 'Aluno ' + (i + 1)
      student.cpf = '74' + i + '81' + i + '25' + i + '49'
      student.celular = '988' + i + '2-2' + i + '36' + i
      student.dataNascimento = (i + 3) + '/04/2000'

      this.studentList.push(student)
    }
  }

}
