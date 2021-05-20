import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentList: Student[]

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this.studentService.getAll()
  }

}
