import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newStudent: Student
  students: Student[]

  constructor(private studentService: StudentService) {
    console.log('ESTOU NO COMPONENT')
  }

  ngOnInit() {
    this.newStudent = new Student()
    this.students = this.studentService.students
  }

  save() {
    this.studentService.save(this.newStudent)
    this.newStudent = new Student()
  }
}
