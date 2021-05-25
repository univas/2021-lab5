import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  teacherList: Teacher[]

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherList = this.teacherService.getAll()
  }

}
