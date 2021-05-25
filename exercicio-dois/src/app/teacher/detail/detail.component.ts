import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  teacher: Teacher

  constructor(private teacherService: TeacherService,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      this.teacher = this.teacherService.getById(id)
    })
  }

}
