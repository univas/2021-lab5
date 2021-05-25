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

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacher = new Teacher()
  }

  save(myForm) {
    this.teacherService.save(this.teacher)
    this.teacher = new Teacher()
    myForm.reset()
  }
}
