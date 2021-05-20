import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  teacher: Teacher
  teacherList: Teacher[]

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacher = new Teacher()
    this.teacherList = this.teacherService.getAll()
  }

  save(myForm) {
    this.teacherService.save(this.teacher)
    myForm.reset()
  }
}
