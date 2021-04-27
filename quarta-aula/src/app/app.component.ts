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
      student.celular = '98' + i + '22' + i + '36' + i
      student.dataNascimento = (i + 3) + '/04/2000'
      student.peso = i + 5 * 8.123234675675635
      student.salario = i + 10 * 12.454253412

      this.studentList.push(student)
    }
  }

}
