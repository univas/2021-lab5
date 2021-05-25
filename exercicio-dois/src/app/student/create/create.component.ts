import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  student: Student

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = new Student()
  }

  save(myForm) {
    this.studentService.save(this.student)
    this.student = new Student()
    myForm.reset()
  }
}
