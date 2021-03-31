import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  student: Student = new Student()
  students: Student[] = []

  saveData(form) {
    console.log('Salvando os dados...')
    
    this.students.push(this.student)
    this.student = new Student()
    console.log(this.students)
  }

}
