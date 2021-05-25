import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent as StudentCreateComponent } from './student/create/create.component';
import { CreateComponent as TeacherCreateComponent } from './teacher/create/create.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';
import { DetailComponent as StudentDetailComponent } from './student/detail/detail.component';
import { DetailComponent as TeacherDetailComponent } from './teacher/detail/detail.component';

const routes: Routes = [
  { path: 'listStudent', component: StudentListComponent },
  { path: 'createStudent', component: StudentCreateComponent },
  { path: 'studentDetail/:id', component: StudentDetailComponent },
  { path: 'listTeacher', component: TeacherListComponent },
  { path: 'createTeacher', component: TeacherCreateComponent },
  { path: 'teacherDetail/:id', component: TeacherDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
