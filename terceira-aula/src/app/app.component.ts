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
    
    if (!this.student.id) {
      this.student.id = (new Date()).getTime()
      this.students.push(this.student)
    
    } else {
      let oldStudent = this.students.find(s => s.id === this.student.id)
      oldStudent.name = this.student.name
      oldStudent.email = this.student.email
    }
    
    this.student = new Student()
    form.resetForm()
  }

  editStudent(stu: Student) {
    this.student = new Student(
      stu.id,
      stu.name,
      stu.email
    )
  }

  removeStudent(stu: Student) {
    let index = this.students.findIndex(s => s.id === stu.id)
    this.students.splice(index, 1)
  }
}
